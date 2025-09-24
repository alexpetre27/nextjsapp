"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-center">Autentificare</CardTitle>
          <CardDescription className="text-center">
            Autentifică-te pentru a continua.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4">
          {session ? (
            <>
              <p className="text-center">
                Ești autentificat ca **{session.user?.name}**
              </p>
              <Button onClick={() => signOut()} className="w-full">
                Deconectare
              </Button>
            </>
          ) : (
            <Button onClick={() => signIn("google")} className="w-full">
              Conectează-te cu Google
            </Button>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
