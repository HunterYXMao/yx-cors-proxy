const express = require("express");
    const corsAnywhere = require("cors-anywhere");
    
    const host = "0.0.0.0";
    const port = process.env.PORT || 8080;
    
    corsAnywhere.createServer({
      originWhitelist: [], // 允许所有来源
      requireHeader: ["origin", "x-requested-with"],
      removeHeaders: ["cookie", "cookie2"],
    }).listen(port, host, () => {
      console.log(`CORS Proxy running on ${host}:${port}`);
    });
