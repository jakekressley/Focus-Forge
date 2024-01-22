import prisma from '../../lib/prisma';

export default async function handle(req, res) {
    const userData = await prisma.user.findUnique({ where: { email: 'kressleyjake' } })

    res.status(200).json({ userData });
}