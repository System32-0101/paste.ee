const 	request 	= require('request');

function PasteeAPI(key) {
    this.key = key || "";
}

PasteeAPI.prototype.paste = function (data) {
    return new Promise((resolve, reject) => {
        let header = {
            "X-Auth-Token": this.key,
            "Content-Type": "application/json"
        };

        if (typeof data === "string") {
            data = { "contents" : data };
        }

        let body = {};
        if(typeof data.sections === "object"){
            body.sections = data.sections
            body = {
                "encrypted":    data.encrypted || false,
                "description":  data.description || "",
                "sections": data.sections,
                "expiration": data.expire.hasOwnProperty("type") || data.expire,
                "expiration_views": data.expire.views || ""
            };
        }else{
            if (!data.contents) {
                reject(new Errror("content is required"));
            }
            body = {
                "encrypted":    data.encrypted || false,
                "description":  data.description || "",
                "sections": [{
                    "name":     data.name || "",
                    "syntax":   "autodetect",
                    "contents":  data.contents
                }],
                "expiration": data.expire.hasOwnProperty("type") || data.expire,
                "expiration_views": data.expire.views || ""
            };
        }

        request.post({
            headers:    header,
            url:        "https://api.paste.ee/v1/pastes",
            body:       JSON.stringify(body, null, 2)
        }, function (err, res, body) {
            if (err) {reject(err);}
            try {
              resolve(JSON.parse(body));
            } catch (err) {
              reject(err);
            }
        });
    });
};

module.exports = PasteeAPI;
