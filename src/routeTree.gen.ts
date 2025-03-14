/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as ReportedSessionsAllImport } from './routes/reported-sessions/all'
import { Route as InvoicesAllImport } from './routes/invoices/all'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ReportedSessionsAllRoute = ReportedSessionsAllImport.update({
  id: '/reported-sessions/all',
  path: '/reported-sessions/all',
  getParentRoute: () => rootRoute,
} as any)

const InvoicesAllRoute = InvoicesAllImport.update({
  id: '/invoices/all',
  path: '/invoices/all',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/invoices/all': {
      id: '/invoices/all'
      path: '/invoices/all'
      fullPath: '/invoices/all'
      preLoaderRoute: typeof InvoicesAllImport
      parentRoute: typeof rootRoute
    }
    '/reported-sessions/all': {
      id: '/reported-sessions/all'
      path: '/reported-sessions/all'
      fullPath: '/reported-sessions/all'
      preLoaderRoute: typeof ReportedSessionsAllImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/invoices/all': typeof InvoicesAllRoute
  '/reported-sessions/all': typeof ReportedSessionsAllRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/invoices/all': typeof InvoicesAllRoute
  '/reported-sessions/all': typeof ReportedSessionsAllRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/invoices/all': typeof InvoicesAllRoute
  '/reported-sessions/all': typeof ReportedSessionsAllRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/invoices/all' | '/reported-sessions/all'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/invoices/all' | '/reported-sessions/all'
  id: '__root__' | '/' | '/invoices/all' | '/reported-sessions/all'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  InvoicesAllRoute: typeof InvoicesAllRoute
  ReportedSessionsAllRoute: typeof ReportedSessionsAllRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  InvoicesAllRoute: InvoicesAllRoute,
  ReportedSessionsAllRoute: ReportedSessionsAllRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/invoices/all",
        "/reported-sessions/all"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/invoices/all": {
      "filePath": "invoices/all.tsx"
    },
    "/reported-sessions/all": {
      "filePath": "reported-sessions/all.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
