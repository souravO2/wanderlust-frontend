"use client";

import { signOut, useSession } from "@/lib/auth-client";
import { AlertCircle, LogOut, Mail, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]!.toUpperCase())
    .join("");

const ProfilePage = () => {
  const { data, isPending } = useSession();
  const user = data?.user;
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);

  const handleSignOut = async () => {
    setIsSigningOut(true);
    try {
      await signOut();
    } finally {
      setIsSigningOut(false);
      setConfirmOpen(false);
    }
  };

  return (
    <div className="mx-auto w-2xl max-w-5xl px-4 py-10 md:px-6">
      {/* Header Section */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-normal tracking-tight">Profile</h1>
        <p className="text-muted-foreground mt-2 text-sm">
          Manage your account and preferences
        </p>
      </div>

      {isPending ? (
        <LoadingSkeleton />
      ) : !user ? (
        <SignedOutCard />
      ) : (
        <>
          <Card className="max-w-xl">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar size="lg" className="size-14">
                  {user.image ? (
                    <AvatarImage src={user.image} alt={user.name} />
                  ) : null}
                  <AvatarFallback className="text-lg">
                    {getInitials(user.name)}
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <CardTitle className="truncate text-xl">
                    {user.name}
                  </CardTitle>
                  <CardDescription className="truncate">
                    {user.email}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex items-center justify-between gap-2 rounded-lg bg-muted/50 px-3 py-2.5">
                <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="size-4" />
                  Email
                </span>
                <span className="inline-flex min-w-0 items-center gap-2 text-sm">
                  <span className="truncate">{user.email}</span>
                  {user.emailVerified ? (
                    <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                      <ShieldCheck className="size-3" />
                      Verified
                    </span>
                  ) : null}
                </span>
              </div>
              <Button
                variant="outline"
                className="self-start ml-auto text-red-700 cursor-pointer"
                onClick={() => setConfirmOpen(true)}
              >
                <LogOut data-icon="inline-start" />
                Sign Out
              </Button>
            </CardContent>
          </Card>

          <AlertDialog open={confirmOpen} onOpenChange={setConfirmOpen}>
            <AlertDialogContent size="sm">
              <AlertDialogHeader>
                <AlertDialogMedia className="bg-destructive/10 text-destructive">
                  <LogOut />
                </AlertDialogMedia>
                <AlertDialogTitle>Sign out of Wanderlast?</AlertDialogTitle>
                <AlertDialogDescription>
                  You will need to sign in again to access your bookings and
                  destinations.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel disabled={isSigningOut}>
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleSignOut}
                  disabled={isSigningOut}
                >
                  {isSigningOut ? "Signing out..." : "Sign out"}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </>
      )}
    </div>
  );
};

const LoadingSkeleton = () => (
  <div className="flex max-w-xl animate-pulse flex-col gap-4">
    <div className="flex items-center gap-4">
      <div className="size-14 shrink-0 rounded-full bg-muted" />
      <div className="flex flex-col gap-2">
        <div className="h-5 w-40 rounded bg-muted" />
        <div className="h-4 w-56 rounded bg-muted" />
      </div>
    </div>
    <div className="h-12 rounded-lg bg-muted" />
    <div className="h-8 w-28 rounded-lg bg-muted" />
  </div>
);

const SignedOutCard = () => (
  <Card className="max-w-xl">
    <CardHeader>
      <div className="flex items-center gap-3">
        <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-md bg-muted">
          <AlertCircle className="size-5 text-muted-foreground" />
        </div>
        <div>
          <CardTitle>You&apos;re not signed in</CardTitle>
          <CardDescription>
            Sign in to view your profile and manage your bookings
          </CardDescription>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <Button render={<Link href="/signin" />}>Sign In</Button>
    </CardContent>
  </Card>
);

export default ProfilePage;
