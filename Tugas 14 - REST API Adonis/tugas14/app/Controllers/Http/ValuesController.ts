// import { Request } from '@adonisjs/core/build/standalone'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {schema, rules} from '@ioc:Adonis/Core/Validator'
import ValidvalueValidator from 'App/Validators/ValidvalueValidator'

export default class ValuesController {
    public async kirim({request, response} : HttpContextContract){
        try{
            const newValues = await request.validate(ValidvalueValidator)
            // const value = await request.validate({schema:newValues})
            response.ok({
                message:newValues
            })
        }catch (error) {
            response.badRequest(error.messages)
        }
    }
}
