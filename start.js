"use strict"

const game = require('./game')
const Parcel = require('./parcel')
const HiroVsANotTooLargeWorld = require('./hiro')
const Jow = require('./jow')
const ButCanYouBeatRandom = require('./lamjam')
const Hippie = require('./hippie')

game([
    Parcel,
    HiroVsANotTooLargeWorld,
    Jow,
    ButCanYouBeatRandom,
    Hippie
])
