import {Router} from 'express'
import verificarAutenticacion from '../middlewares/autenticacion.js'
import {
    login,
    perfil,
    registro,
    confirmEmail,
    listarVeterinarios,
    detalleVeterinario,
    actualizarPerfil,
    actualizarPassword,
    recuperarPassword,
    comprobarTokenPasword,
    nuevoPassword,
} from "../controllers/veterinario_controller.js";


const router = Router()
/**
 * @openapi
 * /api/login:
 *   post:
 *     tags:
 *       - Login and Register
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Email del usuario
 *                 example: test123@hotmail.com
 *               password:
 *                 type: string
 *                 description: Email del usuario
 *                 example: 123456
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 */

router.post('/login',login)

/**
 * @openapi
 * /api/registro:
 *   post:
 *     tags:
 *       - Login and Register
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Email del usuario
 *                 example: test123@hotmail.com
 *               password:
 *                 type: string
 *                 description: Email del usuario
 *                 example: 123456
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 */

router.post('/registro',registro)

/**
 * @openapi
 * /api/confirmar/:token:
 *   get:
 *     tags:
 *       - Veterinario
 *     parameters:
 *       - in1: path
 *         name: token
 *         required: true
 *         schema:
 *           type: string
 *         description: Token del usuario para confirmar su email
 *     responses:
 *       200:
 *         description: User register
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 */

router.get('/confirmar/:token',confirmEmail)

/**
 * @openapi
 * /api/veterinarios:
 *   get:
 *     tags:
 *       - Veterinario
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 */

router.get('/veterinarios',listarVeterinarios)

/**
 * @openapi
 * /api/recuperar-password:
 *   post:
 *     tags:
 *       - Recover Password
 *     parameters:
 *       - in2: path
 *         name: mail
 *         required: true
 *         schema:
 *           type: string
 *         description: Mail del usuario que desea recuperar la contraseña
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 */

router.post('/recuperar-password',recuperarPassword)

/**
 * @openapi
 * /api/recuperar-password/:token:
 *   get:
 *     tags:
 *       - Recover Password
 *     parameters:
 *       - in3: path
 *         name: token
 *         required: true
 *         schema:
 *           type: string
 *         description: Token del usuario que desea recuperar la contraseña
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 */

router.get('/recuperar-password/:token',comprobarTokenPasword)

/**
 * @openapi
 * /api/nuevo-password/:token:
 *   post:
 *     tags:
 *       - Veterinario
 *     parameters:
 *       - in4: path
 *         name: password
 *         name: confirmpassword
 *         required: true
 *         schema:
 *           type: string
 *         description: Contraseña nueva y su confirmación. 

 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 */

router.post('/nuevo-password/:token',nuevoPassword)

/**
 * @openapi
 * /api/perfil:
 *   get:
 *     tags:
 *       - Veterinario
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Perfil del veterinario obtenido exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 *     parameters:
 *       - in5: header
 *         name: Authorization
 *         description: Token de autenticación JWT en formato 'Bearer token'
 *         required: true
 *         schema:
 *           type: string
 *           format: jwt
 *       401:
 *         description: No se proporcionó un token de autenticación válido.
 *       403:
 *         description: Token de autenticación válido pero no tiene acceso al perfil.
 *     securitySchemes:
 *       bearerAuth:
 *         type: http
 *         scheme: bearer
 *         bearerFormat: JWT
 */

router.get('/perfil',verificarAutenticacion,perfil)

/**
 * @openapi
 * /api/veterinario/actualizarpassword:
 *   put:
 *     tags:
 *       - Veterinario
 *     security:
 *       - bearerAuth: []
 *     securitySchemes:
 *       bearerAuth:
 *         type: http
 *         scheme: bearer
 *         bearerFormat: JWT 
 *      parameters:
 *       - in6: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del veterinario del que se busca actualizar la contraseña. 
 *       - in7: header
 *         name: Authorization
 *         description: Token de autenticación JWT en formato 'Bearer token'
 *         required: true
 *         schema:
 *           type: string
 *           format: jwt
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 */

router.put('/veterinario/actualizarpassword',verificarAutenticacion,actualizarPassword)

/**
 * @openapi
 * /api/veterinario/:id:
 *   get:
 *     tags:
 *       - Veterinario
 *     security:
 *       - bearerAuth: []
 *     securitySchemes:
 *       bearerAuth:
 *         type: http
 *         scheme: bearer
 *         bearerFormat: JWT 
 *     parameters:
 *       - in8: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario a obtener. 
 *       - in9: header
 *         name: Authorization
 *         description: Token de autenticación JWT en formato 'Bearer token'
 *         required: true
 *         schema:
 *           type: string
 *           format: jwt
 *     responses:
 *       200:
 *         description: Password successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 */
router.get('/veterinario/:id',verificarAutenticacion,detalleVeterinario)

/**
 * @openapi
 * /api/veterinario/:id:
 *   put:
 *     tags:
 *       - Veterinario
 *     security:
 *       - bearerAuth: [] 
 *     securitySchemes: 
 *       bearerAuth: 
 *          type: http
 *          scheme: bearer
 *          bearerFormat: JWT
 *     parameters:
 *        - in10: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario a actualizar. 
 *       - in11: header
 *         name: Authorization
 *         description: Token de autenticación JWT en formato 'Bearer token'
 *         required: true
 *         schema:
 *           type: string
 *           format: jwt
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 */

router.put('/veterinario/:id',verificarAutenticacion,actualizarPerfil)



export default router




