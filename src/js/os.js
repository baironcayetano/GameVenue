/** Retrives the os name using the navigator userAgent
*	@returns {string}
 **/
 export function detectOs(){
	//The function will try to get the os name using the userAgentData method
	//when this method is not present, the function will return the os name
	//using the classic userAgent method
 	if(navigator.userAgentData){
 		return navigator.userAgentData.platform;
 	}

 	const ua = navigator.userAgent.toLowerCase();
 	if(ua.includes("win")) return "Windows";
 	if(ua.includes("mac")) return "macOs";
 	if(ua.includes("android")) return "Android";
 	if(ua.includes("iphone") || ua.includes("ipad") || ua.includes("ipod")) return "iOS";
 	if(ua.includes("linux")) return "Linux";

 	//otherwise - unknown platform
 	return "Unknown";
 	
 }

 /** Using the detectOs function, determines whether the current platform is mobile or not 
*	@returns {boolean}
 **/
 export function isMobile(){
 	const os = detectOs().toLowerCase();

 	if(os.includes("android") || os.includes("iphone") || os.includes("ipad") || os.includes("ipod")){
 		return true;
 	}

 	return false;
 }
