export const environment = {
  production: true,
  backend: {
    protocol: 'http',
    host: '127.0.0.1',
    port: '9000',
    endpoints: {
      giftingEvents: {
        allGiftingEvents: '/api/giftingEvents',
        oneGiftingEvent: '/api/giftingEvents/:id'
      },
      gifts: {
        allGifts: '/api/gifts',
        oneGift: '/api/gifts/:id',
        allGiftsForGiftingEvent: '/api/giftingEvent/:giftingEventId/gifts',
        oneGiftForGiftingEvent: '/api/giftingEvent/:giftingEventId/gifts/:id',
      }
    }
  }
};
