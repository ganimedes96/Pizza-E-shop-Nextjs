'use client'
import { AlertTriangle, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import GoogleIcon from '@/assets/google.svg'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { useFormState } from '@/hook/use-form-state'


import { signWithEmailAndPassword } from './actions'
import Image from 'next/image'
import { handleSignInGoogle } from '@/service/firebase-config'

export function SignInForm() {
  const router = useRouter()
  const [{ errors, success, message }, handleSignIn, isPending] = useFormState(
    signWithEmailAndPassword,
    () => router.push('/'),
  )
  return (
    <div className="space-y-4">
      <form onSubmit={handleSignIn} className="space-y-4">
        {success === false && message && (
          <Alert variant="destructive">
            <AlertTriangle className="size-4" />
            <AlertTitle>Sign in failed!</AlertTitle>
            <AlertDescription>
              <p>{message}</p>
            </AlertDescription>
          </Alert>
        )}
        <div className="space-y-1">
          <Label htmlFor="email">E-mail</Label>
          <Input name="email" type="email" id="email" />
          {errors?.email && (
            <p className="text-xm font-medium text-red-500 dark:text-red-500">
              {errors.email[0]}
            </p>
          )}
        </div>
        <div className="space-y-1">
          <Label htmlFor="password">Password</Label>
          <Input name="password" type="password" id="password" />
          {errors?.password && (
            <p className="text-xm font-medium text-red-500 dark:text-red-500">
              {errors.password[0]}
            </p>
          )}
          <Link
            href="/auth/forgot-password"
            className="text-xs font-medium text-foreground hover:underline"
          >
            Forgot your password?
          </Link>
        </div>

        <Button className="w-full" type="submit" disabled={isPending}>
          {isPending ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            'Sign in with e-mail'
          )}
        </Button>
        <Button className="w-full" variant="link" size="sm" asChild>
          <Link href="/auth/sign-up">Create new account</Link>
        </Button>
      </form>
      <form >
        <Separator />
        <Button onClick={() => handleSignInGoogle()} type="submit" className="w-full flex items-center gap-2" variant="outline">
          <Image src={GoogleIcon} alt="Google icon" width={20} height={20}/>
          Sign in with Google
        </Button>
      </form>
    </div>
  )
}