async function jsonCallFunc (url, method, data)
{
    const param = JSON.stringify(data);
    const header = {"Content-Type": "application/json"};

    try
    {
        const res = await( await fetch(url, {method:method, headers:header, body:param}) ).json();
        return res;
    }
    catch ( ex )
    {
        console.log( "ERROR :::::   " , ex);
    }
}

async function formSubmit (url, data)
{
    console.log("일로옴");
    const header = { "Content-Type": "application/x-www-form-urlencoded" };
    try
    {
        const res = await ( fetch(url, {method:"POST", headers:header, body:data}));
        console.log("RES ::::::: " , res);
        return res;
    }
    catch( ex )
    {
        console.log(" ERROR :::::  " , ex);
    }
}