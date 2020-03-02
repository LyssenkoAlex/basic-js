module.exports = function createDreamTeam( members ) {
   return Array.isArray(members) ? members.filter((k) => typeof k === 'string').reduce((block, index) => {
        return  block +  index.trim().substr(0, 1).toUpperCase() ;

    }, '').split('').sort().join('') : false ;
};
