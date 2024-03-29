import express from 'express';
import { UserController } from './user.controller';
import { UserValidation } from './user.validation';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { ENU_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.post(
  '/sign-up',
  validateRequest(UserValidation.createZodUserSchema),
  UserController.createUser,
);

router.post('/sign-in', UserController.loginUser);

router.post(
  '/refresh-token',
  auth(ENU_USER_ROLE.ADMIN, ENU_USER_ROLE.USER),
  UserController.refreshToken,
);

router.get('/all-users', auth(ENU_USER_ROLE.ADMIN), UserController.getAllUsers);

router.get(
  '/:id',
  auth(ENU_USER_ROLE.ADMIN, ENU_USER_ROLE.USER),
  UserController.getSingleUser,
);
router.get(
  '/find-trainer/:id',
  // auth(ENU_USER_ROLE.ADMIN, ENU_USER_ROLE.USER),
  UserController.getTrainerByUser,
);

export const userRoutes = router;
