import aj from './lib/arcjet';
import { createMiddleware } from '@arcjet/next';
import { detectBot, shield } from 'arcjet';

export const config = {
        matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sign-in|assets).*)'],
};

export default createMiddleware(
        aj
                .withRule(shield({ mode: 'LIVE' }))
                .withRule(detectBot({ mode: 'LIVE', allow: ['CATEGORY:SEARCH_ENGINE', 'GOOGLE_CRAWLER'] })),
);
