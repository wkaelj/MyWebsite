
const page_content = document.getElementById("content");


function convert_page(simple_name) {

    let port = "5010";
    switch (simple_name) {
        case "home":
            return "http://0.0.0.0:" + port + "/pages/home.html"
        case "about_us":
            return "http://0.0.0.0:" + port + "/pages/about_us.html";
        case "faq":
            return "http://0.0.0.0:" + port + "/pages/faq.html";
        case "projects":
            return "http://0.0.0.0:" + port + "/pages/projects.html";
        default:
            return null;
    }
}

function load_page (filepath) {

    let url = convert_page(filepath);
    if (url == null) {
        page_content.innerHTML = "<h1>404</h1>";
        console.log("Coule not load page " + filepath);
        return;
    };

    fetch(url).then((response) => {
        response.text().then((string) => {
            page_content.innerHTML = "";
            scrollTo(0, 0);
            page_content.innerHTML = string;
        });
    });

}


// load home page
load_page("home");
