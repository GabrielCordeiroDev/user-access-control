import PermissionController from '@controllers/PermissionController'
import RoleController from '@controllers/RoleController'
import SessionController from '@controllers/SessionController'
import UserController from '@controllers/UserController'
import { Router } from 'express'

const router = Router()

router.post('/users', UserController.create)
router.post('/sessions', SessionController.create)
router.post('/permissions', PermissionController.create)
router.post('/roles', RoleController.create)

export { router }
