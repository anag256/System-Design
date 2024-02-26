//1) 2) 3) Check from notes

//4) Storage Limit

function hasEnoughSpaceForData(){
    if('storage' in navigator && 'estimator' in navigator.storage){
        navigator.storage.estimate().then(estimate=>{
            console.log("USAGE:"+(estimate.usage/1024/1024).toFixed(2))
            //storage usage in megabytes
            console.log("QUOTA:"+(estimate.quota/1024/1024).toFixed(2))
             //storage quota in megabytes
        })
    }
    else{
        console.log("Storage Manager API is not supported in this browser")
    }
}

// 5) session management

// STore sessionId in a cookie with a HTTP ony flag

const sessionId='12344';
document.cookie=`sessionId=${sessionId}; HttpOnly; Secure`;

//On the server side,associate session id with user data
const sessionData=getSessionData(sessionId);