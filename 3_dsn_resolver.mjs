import dns from "dns";

// console.log(dns.getServers("www.google.com"));

dns.resolve("google.com", (err, address) => {
  console.log(address);
});
