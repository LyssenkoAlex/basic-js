

module.exports = function dateSample( sampleActivity ) {

  const MODERN_TIME = 15;
  const HALF_LIFE= 5730;

  let res = false;
  if ( typeof sampleActivity === 'string' ) {
      let activity = parseFloat(sampleActivity);
      if ( activity > 0 && activity <= MODERN_TIME ) {
        res = Math.ceil((Math.log(MODERN_TIME / activity)) / (0.693 / HALF_LIFE));
        res = Math.abs(res);
      }
  }
  return res;
};
