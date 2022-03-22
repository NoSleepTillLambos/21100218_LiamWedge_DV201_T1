
// get request and appending the data for standings page

$(function(){

    // ENGLAND HAS AN ID OF 237

    const url = "https://apiv3.apifootball.com/?action=get_standings&league_id=152&APIkey=https://apiv3.apifootball.com/?action=get_teams&league_id=152&APIkey=https://apiv3.apifootball.com/?action=get_statistics&match_id=86392&APIkey=040c086b333363e8f4d255b2e33e8aded53dc8dd695d2cb7b2e21164c37a5ee1"
    $.getJSON(url, function(result){

    console.log(result);


        for ( i = 0; i < result.length; i++) {
            
            $(".team_card").append(  `
            <div class="col-3">
                <div class="card">
                    <div class="img_con">
                        <img src="`+result[i].team_badge +`" class="card-img-top" alt="">
                        <h1>Pts:`+result[i].overall_league_PTS+`</h1>
                        
                    </div>
                    <div class="card-body">
                        
                        <p class="card-text"><strong>Position: </strong> `+result[i].overall_league_position+`</p>
                        <p class="card-text"><strong>Wins: </strong> `+result[i].overall_league_W+`</p>
                        <p class="card-text"><strong>Losses: </strong> `+result[i].overall_league_L+`</p>
                    </div>
                </div>
            </div> `
            )
        }
    });

})