/**
 * An array of routes that are accessible to the public.
 * These routes do not require authentication.
 * @type {string[]}
 */
export const publicRoutes = [
    "/"
];

/**
 * An array of routes that are not accessible to the public.
 * These routes require authentication.
 * @type {string[]}
 */
export const privateRoutes = [
    "/wishlist",
    "/cart",
    "/product/create"
]

/**
 * An array of routes that are used for authentication.
 * These routes will redirect logged in users to /home
 * @type {string[]}
 */
export const authRoutes = [
    "/login",
    "/signup"
];

/**
 * The prefix for API authentication routes.
 * Routes that start with this prefix are used for API authentication purposes.
 * @type {string}
 */
export const apiAuthPrefix = "api/auth";

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/home"