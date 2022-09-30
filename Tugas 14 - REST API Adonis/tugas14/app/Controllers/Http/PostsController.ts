import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PostsController {
    public async index({response}: HttpContextContract){
        response.status(200).json({
            message:"test root benar"
        })
    }
}
 