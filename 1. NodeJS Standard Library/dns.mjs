import dns from "dns/promises";

const ip = await dns.lookup("www.facebook.com");

//console.log(ip);
console.log(ip.address);
console.log(ip.family);