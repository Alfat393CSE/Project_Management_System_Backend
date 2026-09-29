import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// basic configuration
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// cors configuration
app.use(
  cors({
    origin: process.env.COR_ORIGIN?.split(",") || "http://localhost:5173",
    credentials: true,
    methods: ["POST", "GET", "PATCH", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

// import routes
import healthCheck from "./routes/healthcheck.routes.js";
import authRouter from "./routes/auth.routes.js";

app.use("/api/v1/healthcheck", healthCheck);
app.use("/api/v1/auth", authRouter);

app.get("/", (req, res) => {
  res.send(`Welcome to basecamp`);
});

export default app;
