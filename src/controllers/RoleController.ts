import { RoleService } from '@services/RoleService'
import { Request, Response } from 'express'

class RoleController {
  async create (req: Request, res: Response): Promise<Response> {
    const { name, description, permissions } = req.body

    const roleService = new RoleService()

    try {
      const role = await roleService.create({ name, description, permissions })
      return res.status(201).json(role)
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  }

  async listAllRoles (req: Request, res: Response): Promise<Response> {
    const roleService = new RoleService()
    const allRoles = await roleService.listAllRoles()
    return res.json(allRoles)
  }
}

export default new RoleController()
