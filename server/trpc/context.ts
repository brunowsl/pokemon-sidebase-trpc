import type { inferAsyncReturnType } from '@trpc/server'
import type { H3Event } from 'h3'
import {getServerSession} from "#auth";

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export async function createContext(_event: H3Event) {
  /**
   * Add any trpc-request context here. E.g., you could add `prisma` like this (if you've added it via sidebase):
   * ```ts
   * return { prisma: _event.context.prisma }
   * ```
   */
  const session = await getServerSession(_event)
  return {
    session,
    prisma: _event.context.prisma
  }
}

export type Context = inferAsyncReturnType<typeof createContext>
