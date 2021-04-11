"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const movie_route_1 = __importDefault(require("./routes/movie.route"));
const morgan_1 = __importDefault(require("morgan"));
class Server {
    constructor() {
        this.app = express_1.default();
    }
    Middleware() {
        this.app.use(morgan_1.default('dev'));
    }
    Routes() {
        this.app.use('/movies', movie_route_1.default);
    }
    Setting() {
        this.app.use(express_1.default.json());
        this.app.use(cors_1.default());
    }
    Listening() {
        this.app.listen(process.env.PORT);
        console.log(`Puerto: ${process.env.PORT}`);
    }
}
exports.Server = Server;
