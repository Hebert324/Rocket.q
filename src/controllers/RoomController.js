const Database = require('../db/config')

module.exports = {
    async create(req, res) {
        const db = await Database()
        const pass = req.body.password
        let roomId
        let isRoom = true

        while(isRoom) {
            // Aqui ele gera o id da sala
            for(let i = 0; i < 6; i++) {
                i == 0 ? roomId = Math.floor(Math.random() * 10).toString() :
                roomId += Math.floor(Math.random() * 10).toString()
            }

            // Verificar se o id ja existi no banco de dados
            const roomExistIds = await db.all(`SELECT id FROM rooms`)
            isRoom = roomExistIds.some(roomExistIds => roomExistIds === roomId)

            if(!isRoom){
                // Inseri a sala e a senha no banco de dados
                await db.run(`INSERT INTO rooms (
                    id,
                    pass
                ) VALUES (
                    ${parseInt(roomId)},
                    ${pass}
                )`)
            }
        }

        await db.close()

        res.redirect(`/room/${roomId}`)
    },

    open(req, res) {
        const roomId = req.params.room
        res.render('room', {roomId: roomId})
    }
}