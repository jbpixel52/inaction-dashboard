

export default function isOnline(url) {
    let answer = new Response(url);
    let status = answer.status
    console.log("status "+ (status)+ " is type "+(typeof(status)))
    switch (status) {
        case 200:
            return "#00e676"   
        default:
            return "red"
            break;
    }
}