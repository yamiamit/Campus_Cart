import express from "express";
import { PermissionFlag } from "./common.permissionflag.enum";
import debug from "debug";

const log: debug.IDebugger = debug("app:common-permission-middleware");

//Will genrate new Middlware function according to permission flag
class commonPermissionMiddleware {
	permissionFlagRequired(requiredPermissionFlag: PermissionFlag) {
		return (req: express.Request, res: express.Response, next: express.NextFunction) => {
			try {
				const userPermissionFlags = parseInt(res.locals.jwt.permissionFlags);
				if (userPermissionFlags & requiredPermissionFlag) {
					next();
				} else {
					res.status(403).send();
				}
			} catch (e) {
				log(e);
			}
		};
	}
	async onlySameUserOrAdminCanDoThisAction(
		req: express.Request,
		res: express.Response,
		next: express.NextFunction
	) {
		const userPermissionFlags = parseInt(res.locals.jwt.permissionFlags);
		if (req.params && req.params.userId && req.params.userId === res.locals.jwt.userId) {
			return next();
		} else {
			if (userPermissionFlags & PermissionFlag.ADMIN_PERMISSION) {
				return next();
			} else {
				return res.status(403).send();
			}
		}
	}
}
export default new commonPermissionMiddleware();
