// Golf courses data
const golfCourses = [
    {"name":"Lady Bird Johnson GC","address":"Fredericksburg, TX","lat":30.2752011,"lng":-98.8719843,"holes":18,"par":"71","yards":"6,432–6,886","difficulty":"Moderate","green_fees":"$45–$75","website":"https://ladybirdgolf.com/"},
    {"name":"The Buckhorn GC","address":"Comfort, TX","lat":29.967715,"lng":-98.9050337,"holes":18,"par":"71","yards":"6,648","difficulty":"Moderate","green_fees":"$35–$50","website":"https://www.buckhorngolfcourse.com/"},
    {"name":"Scott Schreiner Muni GC","address":"Kerrville, TX","lat":30.048469,"lng":-99.1399464,"holes":18,"par":"70","yards":"6,453","difficulty":"Moderate","green_fees":"$30–$45","website":"https://www.golfkerrvilletex.com/"},
    {"name":"Blue Lake GC","address":"Horseshoe Bay, TX","lat":30.5442091,"lng":-98.3669797,"holes":9,"par":"36","yards":"~3,000","difficulty":"Beginner","green_fees":"$25–$35","website":"https://bluelakegolf.com/"},
    {"name":"Lighthouse CC","address":"Kingsland, TX","lat":30.6582405,"lng":-98.4405849,"holes":18,"par":"71","yards":"~6,500","difficulty":"Moderate","green_fees":"$40–$60","website":"https://lighthousecountryclub.com/"},
    {"name":"Llano River GC","address":"Llano, TX","lat":30.6663312,"lng":-98.6970374,"holes":18,"par":"71","yards":"6,094","difficulty":"Moderate","green_fees":"$30–$50","website":"https://www.golfllanoriver.com/"},
    {"name":"Legends GC","address":"Kingsland, TX","lat":30.6582405,"lng":-98.4405849,"holes":18,"par":"72","yards":"~6,800","difficulty":"Moderate","green_fees":"$40–$60","website":"https://legendslbj.com/"},
    {"name":"Delaware Springs GC","address":"Burnet, TX","lat":30.7763939,"lng":-98.1700016,"holes":18,"par":"72","yards":"6,819","difficulty":"Moderate","green_fees":"$30–$35","website":"https://delawaresprings.com/"},
    {"name":"Tapatio Springs GC","address":"Boerne, TX","lat":29.7946641,"lng":-98.7319703,"holes":18,"par":"72","yards":"~6,800","difficulty":"Moderate","green_fees":"$60–$100","website":"https://www.tapatiosprings.com/"},
    {"name":"Vaaler Creek GC","address":"Blanco, TX","lat":30.2419274,"lng":-98.4004594,"holes":18,"par":"72","yards":"~6,800","difficulty":"Moderate","green_fees":"$50–$80","website":"https://www.vaalercreekgolfclub.com/"},
    {"name":"Cypress Valley GC","address":"Spicewood, TX","lat":30.4759222,"lng":-98.1566355,"holes":9,"par":"36","yards":"~3,200","difficulty":"Beginner","green_fees":"$25–$35","website":"https://www.cypressvalley.com/"},
    {"name":"Pedernales GC (Cut-N-Putt)","address":"Spicewood, TX","lat":30.4759222,"lng":-98.1566355,"holes":9,"par":"36","yards":"3,030–3,330","difficulty":"Moderate","green_fees":"$25–$40","website":"http://cutnputt.com/"},
    {"name":"Bandit GC","address":"New Braunfels, TX","lat":29.7028266,"lng":-98.1257348,"holes":18,"par":"72","yards":"~6,900","difficulty":"Moderate","green_fees":"$40–$60","website":"https://www.banditgolfclub.com/"},
    {"name":"Landa Park GC","address":"New Braunfels, TX","lat":29.7028266,"lng":-98.1257348,"holes":18,"par":"71","yards":"~6,100","difficulty":"Moderate","green_fees":"$30–$45","website":"https://www.landaparkgolfcourse.com/"},
    {"name":"Plum Creek GC","address":"Kyle, TX","lat":29.9892928,"lng":-97.8772103,"holes":18,"par":"72","yards":"7,132","difficulty":"Challenging","green_fees":"$50–$85","website":"https://www.plumcreekgolf.com/"},
    {"name":"Brackenridge Park GC","address":"San Antonio, TX","lat":29.4246002,"lng":-98.4951405,"holes":18,"par":"71","yards":"6,243","difficulty":"Moderate","green_fees":"$25–$45","website":"https://alamocitygolftrail.com/brackenridge-park-golf-course/"},
    {"name":"Cedar Creek GC","address":"San Antonio, TX","lat":29.4246002,"lng":-98.4951405,"holes":18,"par":"72","yards":"6,716","difficulty":"Moderate","green_fees":"$30–$50","website":"https://alamocitygolftrail.com/cedar-creek-golf-course/"},
    {"name":"The Quarry GC","address":"San Antonio, TX","lat":29.4246002,"lng":-98.4951405,"holes":18,"par":"72","yards":"6,824","difficulty":"High","green_fees":"$90–$150","website":"https://quarrygolf.com/"},
    {"name":"Northern Hills GC","address":"San Antonio, TX","lat":29.4246002,"lng":-98.4951405,"holes":18,"par":"72","yards":"6,603","difficulty":"Moderate","green_fees":"$35–$60","website":"https://alamocitygolftrail.com/northern-hills-golf-course/"},
    {"name":"Olympia Hills GC","address":"Universal City, TX","lat":29.5480071,"lng":-98.2911235,"holes":18,"par":"72","yards":"7,100","difficulty":"Challenging","green_fees":"$45–$75","website":"https://www.olympiahillsgolf.com/"},
    {"name":"Willow Springs GC","address":"San Antonio, TX","lat":29.4246002,"lng":-98.4951405,"holes":18,"par":"72","yards":"6,500","difficulty":"Moderate","green_fees":"$30–$45","website":"https://alamocitygolftrail.com/willow-springs-golf-course/"},
    {"name":"Lockhart State Park GC","address":"Lockhart, TX","lat":29.8832105,"lng":-97.6736292,"holes":9,"par":"35","yards":"2,900","difficulty":"Beginner","green_fees":"$15–$25","website":"https://tpwd.texas.gov/state-parks/lockhart/fees-facilities/golf-course"},
    {"name":"San Pedro Par 3 GC","address":"San Antonio, TX","lat":29.4246002,"lng":-98.4951405,"holes":9,"par":"27","yards":"1,200","difficulty":"Beginner","green_fees":"$15–$25","website":"https://alamocitygolftrail.com/"},
    {"name":"Riverside GC","address":"Austin, TX","lat":30.2711286,"lng":-97.7436995,"holes":18,"par":"71","yards":"6,562","difficulty":"Moderate","green_fees":"$18–$25","website":"https://riverside-gc.com/"},
    {"name":"ShadowGlen GC","address":"Manor, TX","lat":30.3420882,"lng":-97.555905,"holes":18,"par":"72","yards":"7,205","difficulty":"High","green_fees":"$65–$95","website":"https://www.shadowglengolf.com/"},
    {"name":"San Gabriel GC","address":"Georgetown, TX","lat":30.6370152,"lng":-97.6775634,"holes":18,"par":"72","yards":"6,500","difficulty":"Moderate","green_fees":"$35–$55","website":"https://georgetowncountryclub.net/"},
    {"name":"Star Ranch GC","address":"Hutto, TX","lat":30.5427638,"lng":-97.5468898,"holes":18,"par":"71","yards":"7,017","difficulty":"Moderate","green_fees":"$62–$119","website":"https://www.starranchgolf.com/"},
    {"name":"Crystal Falls GC","address":"Leander, TX","lat":30.5736134,"lng":-97.8567339,"holes":18,"par":"72","yards":"6,654","difficulty":"Moderate","green_fees":"$42–$59","website":"https://www.crystalfallsgolf.com/"},
    {"name":"Avery Ranch GC","address":"Austin, TX","lat":30.2711286,"lng":-97.7436995,"holes":18,"par":"72","yards":"7,121","difficulty":"Challenging","green_fees":"$50–$74","website":"https://www.averyranchhoa.com/"},
    {"name":"Hancock GC","address":"Austin, TX","lat":30.2711286,"lng":-97.7436995,"holes":18,"par":"70","yards":"4,500","difficulty":"Easy","green_fees":"$18","website":"https://www.austintexas.gov/department/hancock-course"},
    {"name":"Jimmy Clay GC","address":"Austin, TX","lat":30.2711286,"lng":-97.7436995,"holes":18,"par":"72","yards":"6,857","difficulty":"Moderate","green_fees":"$30–$37","website":"https://www.austintexas.gov/department/jimmy-clay-course"},
    {"name":"Morris Williams GC","address":"Austin, TX","lat":30.2711286,"lng":-97.7436995,"holes":18,"par":"72","yards":"6,637","difficulty":"Moderate","green_fees":"$30–$37","website":"https://www.austintexas.gov/department/morris-williams-course"},
    {"name":"Lions Municipal GC","address":"Austin, TX","lat":30.2711286,"lng":-97.7436995,"holes":18,"par":"71","yards":"6,001","difficulty":"Moderate","green_fees":"$30–$37","website":"https://www.austintexas.gov/department/lions-municipal-course"},
    {"name":"Roy Kizer GC","address":"Austin, TX","lat":30.2711286,"lng":-97.7436995,"holes":18,"par":"71","yards":"6,819","difficulty":"Moderate-High","green_fees":"$35–$44","website":"https://www.austintexas.gov/department/roy-kizer-course"},
    {"name":"Blackhawk GC","address":"Pflugerville, TX","lat":30.4393696,"lng":-97.6200043,"holes":18,"par":"72","yards":"7,072","difficulty":"Moderate","green_fees":"$32–$44","website":"https://www.blackhawkgolf.com/"},
    {"name":"Forest Creek GC","address":"Round Rock, TX","lat":30.5085915,"lng":-97.6788056,"holes":18,"par":"72","yards":"7,147","difficulty":"Challenging","green_fees":"~$75","website":"https://www.forestcreekgolf.com/"},
    {"name":"Teravista GC","address":"Round Rock, TX","lat":30.5085915,"lng":-97.6788056,"holes":18,"par":"72","yards":"7,039","difficulty":"Challenging","green_fees":"$52–$72","website":"https://www.teravistagolf.com/"},
    {"name":"Lago Vista GC","address":"Lago Vista, TX","lat":30.4601975,"lng":-97.9883477,"holes":18,"par":"72","yards":"6,579","difficulty":"Moderate","green_fees":"$48–$54","website":"https://www.lagovistagolf.com/"},
    {"name":"Harvey Penick Golf Campus","address":"Austin, TX","lat":30.2711286,"lng":-97.7436995,"holes":9,"par":"30","yards":"2,127","difficulty":"Beginner","green_fees":"$13","website":"https://www.harveypenickgolfcampus.com/"},
    {"name":"Falconhead GC","address":"Austin, TX","lat":30.2711286,"lng":-97.7436995,"holes":18,"par":"72","yards":"7,302","difficulty":"Challenging","green_fees":"$69–$99","website":"https://www.falconheadgolf.com/"},
    {"name":"Grey Rock GC","address":"Austin, TX","lat":30.2711286,"lng":-97.7436995,"holes":18,"par":"72","yards":"7,120","difficulty":"Challenging","green_fees":"$75–$120","website":"https://www.greyrockgolf.com/"},
    {"name":"Butler Pitch & Putt","address":"Austin, TX","lat":30.2711286,"lng":-97.7436995,"holes":9,"par":"27","yards":"Short","difficulty":"Beginner","green_fees":"$14–$16","website":"https://www.austintexas.gov/department/butler-pitch-putt"},
    {"name":"Cedars on Bergstrom GC","address":"Austin, TX","lat":30.2711286,"lng":-97.7436995,"holes":18,"par":"—","yards":"—","difficulty":"—","green_fees":"Call","website":"https://www.cedarsonbergstrom.com/"},
    {"name":"River Place CC","address":"Austin, TX","lat":30.2711286,"lng":-97.7436995,"holes":18,"par":"71","yards":"6,683","difficulty":"Challenging","green_fees":"$100+","website":"https://www.riverplacecc.com/"},
    {"name":"Canyon Springs GC","address":"San Antonio, TX","lat":29.4246002,"lng":-98.4951405,"holes":18,"par":"72","yards":"6,800","difficulty":"Challenging","green_fees":"$60–$95","website":"https://www.canyonspringsgc.com/"},
    {"name":"Republic GC","address":"San Antonio, TX","lat":29.4246002,"lng":-98.4951405,"holes":18,"par":"72","yards":"6,800","difficulty":"Moderate","green_fees":"$40–$70","website":"https://www.republicgc.com/"},
    {"name":"Mission del Lago GC","address":"San Antonio, TX","lat":29.4246002,"lng":-98.4951405,"holes":18,"par":"72","yards":"6,900","difficulty":"Moderate","green_fees":"$30–$50","website":"https://alamocitygolftrail.com/mission-del-lago-golf-course/"},
    {"name":"Silverhorn GC","address":"San Antonio, TX","lat":29.4246002,"lng":-98.4951405,"holes":18,"par":"72","yards":"6,900","difficulty":"Moderate","green_fees":"$50–$80","website":"https://www.silverhorngolf.com/"},
    {"name":"Hyatt Hill Country GC","address":"San Antonio, TX","lat":29.4246002,"lng":-98.4951405,"holes":18,"par":"72","yards":"6,900","difficulty":"Moderate","green_fees":"$100+","website":"https://www.hyatthillcountry.com/"},
    {"name":"River Crossing GC","address":"Seguin, TX","lat":29.5688411,"lng":-97.9647269,"holes":18,"par":"72","yards":"6,900","difficulty":"Moderate","green_fees":"$40–$70","website":"https://www.rivercrossinggc.com/"},
    {"name":"Double J Ranch GC","address":"Woodcreek, TX","lat":30.0282683,"lng":-98.1111211,"holes":18,"par":"72","yards":"6,470","difficulty":"Moderate","green_fees":"~$65","website":"https://www.doublejranchgc.com/"},
    {"name":"Quicksand GC","address":"San Marcos, TX","lat":29.8826436,"lng":-97.9405828,"holes":18,"par":"72","yards":"6,800","difficulty":"Moderate","green_fees":"$30–$50","website":"https://www.quicksandgc.com/"}
];

// Function to create popup content
function createPopupContent(course) {
    return `
        <div class="golf-course-popup">
            <h3>${course.name}</h3>
            <div class="course-info">
                <div class="info-row">
                    <span class="info-label">Location:</span>
                    <span class="info-value">${course.address}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Holes:</span>
                    <span class="info-value">${course.holes}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Par:</span>
                    <span class="info-value">${course.par}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Yards:</span>
                    <span class="info-value">${course.yards}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Difficulty:</span>
                    <span class="info-value">${course.difficulty}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Green Fees:</span>
                    <span class="info-value">${course.green_fees}</span>
                </div>
            </div>
            <a href="${course.website}" target="_blank" class="website-link">Visit Website</a>
        </div>
    `;
}

// Initialize map when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    try {
        // Initialize the map
        const map = L.map('map').setView([30.3, -97.9], 8);

        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19
        }).addTo(map);

        // Add markers for each golf course
        golfCourses.forEach(function(course) {
            // Validate lat/lng values
            if (course.lat && course.lng && !isNaN(course.lat) && !isNaN(course.lng)) {
                // Create marker
                const marker = L.marker([course.lat, course.lng]).addTo(map);
                
                // Bind popup with course information
                marker.bindPopup(createPopupContent(course), {
                    maxWidth: 300,
                    className: 'custom-popup'
                });
            }
        });

        // Adjust map view to fit all markers on mobile
        function adjustMapView() {
            if (window.innerWidth <= 768) {
                // On mobile, use a slightly higher zoom level and center more specifically
                map.setView([30.0, -98.0], 7);
            }
        }

        // Call on load and window resize
        adjustMapView();
        window.addEventListener('resize', adjustMapView);

        // Force map to resize after initialization
        setTimeout(function() {
            map.invalidateSize();
        }, 100);

    } catch (error) {
        console.error('Error initializing map:', error);
        // Fallback: show error message
        document.getElementById('map').innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; background: #f5f5f5; color: #333;">Error loading map. Please refresh the page.</div>';
    }
});