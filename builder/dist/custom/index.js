"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const architect_1 = require("@angular-devkit/architect");
exports.default = (0, architect_1.createBuilder)((options, ctx) => {
    //builder logic 
    ctx.logger.info("custom angular build has started ....");
    return {
        success: true
    };
});
