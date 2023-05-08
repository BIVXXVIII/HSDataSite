import NextAuth, {NextAuthOptions } from 'next-auth'
import BattleNetProvider from "next-auth/providers/battlenet";

interface Provider {
    clientId: any,
    clientSecret: any,
    issuer: any
}

export const authOptions: NextAuthOptions = {
        providers: [
    BattleNetProvider({
    clientId: process.env.BATTLENET_CLIENT_ID,
    clientSecret: process.env.BATTLENET_CLIENT_SECRET,
    issuer: process.env.BATTLENET_ISSUER
  })]
}


export default NextAuth(authOptions)