const request = require("request-promise");
const Emitter = require("events").EventEmitter;
const debug = require('debug');


const system = {
	userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36"
};

const monitorOptions = {
	url: 'https://www.apple.com/cn/shop/delivery-message',
	timeout: 2000,
	method: 'get',
	params: context => ({
		'parts.0': context.target.product,
		'little': true,
		'_': new Date().getTime()
	})
};


class Monitor extends Emitter {

	constructor({target, deadlineTime, sleepTime}){
		super();
		this.jar = request.jar();
		this.request = request.defaults({
			jar: this.jar,
		 	headers: {
		    	'User-Agent': system.userAgent
		  	}
		});
		this.context = {
			target,
			deadlineTime,
			sleepTime
		};
		this.debug = debug(`monitor:this.context.target.product`);
		this.debug.enabled = true;
		this.options = {};
		for(let key in monitorOptions){
			let value = monitorOptions[key];
			this.options[key] = value instanceof Function ? value.call(this, this.context): value;
		}

		this.signal = "stop";
		this.isOnLine = false;
		
	}

	async start(){
		this.emit("start");
		if(this.isOnLine) {
			this.emit("online");
			return "online";
		}

		this.signal = "start";
		while(this.signal === "start") {
			try{
				if(this.isOverDeadLine()){
					this.emit("deadline");
					this.stop();
					return "deadline";
				}
				this.debug(`\n\n\n ============fetching===========\n`);
				const res = await this.fetchStatus();
				if(res === "online") {
					this.isOnLine = true;
					this.emit("online");
					this.stop();
					return "online";
				} else if (res === 'error') {
					this.debug(`fetch status response is not ok, try again`);
					this.emit("error");
					continue;
				}	
			}catch(e){
				this.debug(`fetch status error:`, e);
				this.emit("error");
				continue;
			}
			await this.sleep();
		}
		this.stop();
		return null;;
	}
	async fetchStatus(){
		this.debug(`fetch status `, this.options);

		const {url, method, headers, params, timeout} = this.options;

		const rawRes = await this.request({
			url, method, headers,
			[method == "post" ? "form": "qs"]: params
		});
		this.debug('rawRes:',rawRes);
		const res = JSON.parse(rawRes);
		// {"head":{"status":"200","data":{}},"body":{"content":{"deliveryMessage":{"geoLocated":false,"deliveryLocationLink":{"text":"北京","dataVar":{},"newTab":false},"deliveryLocationLabel":"你所在地点：","locationCookieValueFoundForThisCountry":true,"dudeLocated":true,"accessibilityDeliveryOptions":"送货选项","MQA62CH/A":{"label":"","quote":"暂未发售","address":{"state":"北京","city":"北京","district":"西城区"},"showDeliveryOptionsLink":false,"messageType":"Ship","basePartNumber":"MQA62","commitCodeId":"9137","idl":false,"defaultLocationEnabled":false},"little":true}}}}
		if(res.body.content.deliveryMessage ) {
			//this.debug(` fetch status result is:`,res.body.content.deliveryMessage);
			if(res.body.content.deliveryMessage[params["parts.0"]].quote && res.body.content.deliveryMessage[params["parts.0"]].quote !== "暂未发售") {
				// bingo
				return "online";
			} else {
				// 暂未发售
				return "offline";
			}
		} else {
			// error 
			return "error";
		}

	}
	async sleep(){
		this.debug(`sleep for ${this.context.sleepTime} ms`);
		return new Promise( resolve => {
			setTimeout(resolve, this.context.sleepTime || 0);
		});
	}

	stop(){
		this.emit("stop");
		this.signal = "stop";
	}
	
	isOverDeadLine() {
		if(!this.context.deadlineTime) {
			debug(`this is no deadlineTime`);
			return false;
		}
		const now = new Date().getTime();
		this.debug(`now: ${now}, deadline: ${this.context.deadlineTime}`);
		return now >= this.context.deadlineTime;
	}

}
/*
async function  test(){
	const  monitor = new Monitor({
		target: {
			product: 'MNFQ2CH/A'
		},
		deadlineTime: new Date().getTime() + 10000,
		sleepTime: 1000
	});
	monitor.on("online", e => console.log("[ONLINE]"));
	monitor.on("start", e => console.log("[START]"));
	monitor.on("error", e => console.log("[ERROR]"));
	monitor.on("deadline", e => console.log("[DEADLINE]"));

	const res = await monitor.start();

	console.log(`finnal result is:`, res);
}
test();

*/
module.exports = Monitor;