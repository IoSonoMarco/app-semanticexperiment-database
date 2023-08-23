const imageFiles = [{"anchor": "./images/web/cat/persian1.jpg", "pair": "./images/web/cat/persian2.jpg", "score": 0.6884570121765137}, {"anchor": "./images/web/cat/persian1.jpg", "pair": "./images/web/cat/siamese1.jpg", "score": 0.6194376349449158}, {"anchor": "./images/web/cat/persian1.jpg", "pair": "./images/web/cat/siamese2.jpg", "score": 0.687017560005188}, {"anchor": "./images/web/cat/persian1.jpg", "pair": "./images/web/dog/jackrussel1.jpg", "score": 0.49680837988853455}, {"anchor": "./images/web/cat/persian1.jpg", "pair": "./images/web/dog/jackrussell2.jpg", "score": 0.5095984935760498}, {"anchor": "./images/web/cat/persian1.jpg", "pair": "./images/web/dog/labrador1.jpg", "score": 0.48631101846694946}, {"anchor": "./images/web/cat/persian1.jpg", "pair": "./images/web/dog/labrador2.jpg", "score": 0.5070898532867432}, {"anchor": "./images/web/cat/persian1.jpg", "pair": "./images/web/people/boy1.jpg", "score": 0.2652512192726135}, {"anchor": "./images/web/cat/persian1.jpg", "pair": "./images/web/people/boy2.jpg", "score": 0.41297587752342224}, {"anchor": "./images/web/cat/persian1.jpg", "pair": "./images/web/people/girl1.jpg", "score": 0.4090656638145447}, {"anchor": "./images/web/cat/persian1.jpg", "pair": "./images/web/people/girl2.jpg", "score": 0.39776188135147095}, {"anchor": "./images/web/cat/persian1.jpg", "pair": "./images/web/tools/hammer1.jpg", "score": 0.3618967533111572}, {"anchor": "./images/web/cat/persian1.jpg", "pair": "./images/web/tools/hammer2.jpg", "score": 0.3604137897491455}, {"anchor": "./images/web/cat/persian1.jpg", "pair": "./images/web/tools/screwdriver1.jpg", "score": 0.2996335029602051}, {"anchor": "./images/web/cat/persian1.jpg", "pair": "./images/web/tools/screwdriver2.jpg", "score": 0.33638355135917664}, {"anchor": "./images/web/cat/persian1.jpg", "pair": "./images/web/vehicles/car1.jpg", "score": 0.24572809040546417}, {"anchor": "./images/web/cat/persian1.jpg", "pair": "./images/web/vehicles/car2.jpg", "score": 0.33970144391059875}, {"anchor": "./images/web/cat/persian1.jpg", "pair": "./images/web/vehicles/motorcycle1.jpg", "score": 0.3219640254974365}, {"anchor": "./images/web/cat/persian1.jpg", "pair": "./images/web/vehicles/motorcycle2.jpg", "score": 0.31851494312286377}, {"anchor": "./images/web/cat/persian2.jpg", "pair": "./images/web/cat/siamese1.jpg", "score": 0.5886053442955017}, {"anchor": "./images/web/cat/persian2.jpg", "pair": "./images/web/cat/siamese2.jpg", "score": 0.6834970712661743}, {"anchor": "./images/web/cat/persian2.jpg", "pair": "./images/web/dog/jackrussel1.jpg", "score": 0.48201555013656616}, {"anchor": "./images/web/cat/persian2.jpg", "pair": "./images/web/dog/jackrussell2.jpg", "score": 0.47606033086776733}, {"anchor": "./images/web/cat/persian2.jpg", "pair": "./images/web/dog/labrador1.jpg", "score": 0.475441575050354}, {"anchor": "./images/web/cat/persian2.jpg", "pair": "./images/web/dog/labrador2.jpg", "score": 0.39965301752090454}, {"anchor": "./images/web/cat/persian2.jpg", "pair": "./images/web/people/boy1.jpg", "score": 0.2267034351825714}, {"anchor": "./images/web/cat/persian2.jpg", "pair": "./images/web/people/boy2.jpg", "score": 0.31102317571640015}, {"anchor": "./images/web/cat/persian2.jpg", "pair": "./images/web/people/girl1.jpg", "score": 0.29941391944885254}, {"anchor": "./images/web/cat/persian2.jpg", "pair": "./images/web/people/girl2.jpg", "score": 0.2971803545951843}, {"anchor": "./images/web/cat/persian2.jpg", "pair": "./images/web/tools/hammer1.jpg", "score": 0.2874540090560913}, {"anchor": "./images/web/cat/persian2.jpg", "pair": "./images/web/tools/hammer2.jpg", "score": 0.34764784574508667}, {"anchor": "./images/web/cat/persian2.jpg", "pair": "./images/web/tools/screwdriver1.jpg", "score": 0.30070412158966064}, {"anchor": "./images/web/cat/persian2.jpg", "pair": "./images/web/tools/screwdriver2.jpg", "score": 0.30238571763038635}, {"anchor": "./images/web/cat/persian2.jpg", "pair": "./images/web/vehicles/car1.jpg", "score": 0.2673412561416626}, {"anchor": "./images/web/cat/persian2.jpg", "pair": "./images/web/vehicles/car2.jpg", "score": 0.3526258170604706}, {"anchor": "./images/web/cat/persian2.jpg", "pair": "./images/web/vehicles/motorcycle1.jpg", "score": 0.35560375452041626}, {"anchor": "./images/web/cat/persian2.jpg", "pair": "./images/web/vehicles/motorcycle2.jpg", "score": 0.2895382046699524}, {"anchor": "./images/web/cat/siamese1.jpg", "pair": "./images/web/cat/siamese2.jpg", "score": 0.8435308933258057}, {"anchor": "./images/web/cat/siamese1.jpg", "pair": "./images/web/dog/jackrussel1.jpg", "score": 0.6051055192947388}, {"anchor": "./images/web/cat/siamese1.jpg", "pair": "./images/web/dog/jackrussell2.jpg", "score": 0.7013058066368103}, {"anchor": "./images/web/cat/siamese1.jpg", "pair": "./images/web/dog/labrador1.jpg", "score": 0.5575391054153442}, {"anchor": "./images/web/cat/siamese1.jpg", "pair": "./images/web/dog/labrador2.jpg", "score": 0.536332368850708}, {"anchor": "./images/web/cat/siamese1.jpg", "pair": "./images/web/people/boy1.jpg", "score": 0.3783961236476898}, {"anchor": "./images/web/cat/siamese1.jpg", "pair": "./images/web/people/boy2.jpg", "score": 0.39373481273651123}, {"anchor": "./images/web/cat/siamese1.jpg", "pair": "./images/web/people/girl1.jpg", "score": 0.34971359372138977}, {"anchor": "./images/web/cat/siamese1.jpg", "pair": "./images/web/people/girl2.jpg", "score": 0.45593535900115967}, {"anchor": "./images/web/cat/siamese1.jpg", "pair": "./images/web/tools/hammer1.jpg", "score": 0.2794409394264221}, {"anchor": "./images/web/cat/siamese1.jpg", "pair": "./images/web/tools/hammer2.jpg", "score": 0.3906274735927582}, {"anchor": "./images/web/cat/siamese1.jpg", "pair": "./images/web/tools/screwdriver1.jpg", "score": 0.34610918164253235}, {"anchor": "./images/web/cat/siamese1.jpg", "pair": "./images/web/tools/screwdriver2.jpg", "score": 0.33234965801239014}, {"anchor": "./images/web/cat/siamese1.jpg", "pair": "./images/web/vehicles/car1.jpg", "score": 0.2465360462665558}, {"anchor": "./images/web/cat/siamese1.jpg", "pair": "./images/web/vehicles/car2.jpg", "score": 0.2994592785835266}, {"anchor": "./images/web/cat/siamese1.jpg", "pair": "./images/web/vehicles/motorcycle1.jpg", "score": 0.35815995931625366}, {"anchor": "./images/web/cat/siamese1.jpg", "pair": "./images/web/vehicles/motorcycle2.jpg", "score": 0.3218453526496887}, {"anchor": "./images/web/cat/siamese2.jpg", "pair": "./images/web/dog/jackrussel1.jpg", "score": 0.5923882722854614}, {"anchor": "./images/web/cat/siamese2.jpg", "pair": "./images/web/dog/jackrussell2.jpg", "score": 0.6078689098358154}, {"anchor": "./images/web/cat/siamese2.jpg", "pair": "./images/web/dog/labrador1.jpg", "score": 0.562828779220581}, {"anchor": "./images/web/cat/siamese2.jpg", "pair": "./images/web/dog/labrador2.jpg", "score": 0.5362555980682373}, {"anchor": "./images/web/cat/siamese2.jpg", "pair": "./images/web/people/boy1.jpg", "score": 0.3813211917877197}, {"anchor": "./images/web/cat/siamese2.jpg", "pair": "./images/web/people/boy2.jpg", "score": 0.3976391851902008}, {"anchor": "./images/web/cat/siamese2.jpg", "pair": "./images/web/people/girl1.jpg", "score": 0.37548500299453735}, {"anchor": "./images/web/cat/siamese2.jpg", "pair": "./images/web/people/girl2.jpg", "score": 0.36062026023864746}, {"anchor": "./images/web/cat/siamese2.jpg", "pair": "./images/web/tools/hammer1.jpg", "score": 0.32313767075538635}, {"anchor": "./images/web/cat/siamese2.jpg", "pair": "./images/web/tools/hammer2.jpg", "score": 0.37184542417526245}, {"anchor": "./images/web/cat/siamese2.jpg", "pair": "./images/web/tools/screwdriver1.jpg", "score": 0.3202652335166931}, {"anchor": "./images/web/cat/siamese2.jpg", "pair": "./images/web/tools/screwdriver2.jpg", "score": 0.32727986574172974}, {"anchor": "./images/web/cat/siamese2.jpg", "pair": "./images/web/vehicles/car1.jpg", "score": 0.27302712202072144}, {"anchor": "./images/web/cat/siamese2.jpg", "pair": "./images/web/vehicles/car2.jpg", "score": 0.31703799962997437}, {"anchor": "./images/web/cat/siamese2.jpg", "pair": "./images/web/vehicles/motorcycle1.jpg", "score": 0.3391062617301941}, {"anchor": "./images/web/cat/siamese2.jpg", "pair": "./images/web/vehicles/motorcycle2.jpg", "score": 0.3262448310852051}, {"anchor": "./images/web/dog/jackrussel1.jpg", "pair": "./images/web/dog/jackrussell2.jpg", "score": 0.8103265762329102}, {"anchor": "./images/web/dog/jackrussel1.jpg", "pair": "./images/web/dog/labrador1.jpg", "score": 0.7255096435546875}, {"anchor": "./images/web/dog/jackrussel1.jpg", "pair": "./images/web/dog/labrador2.jpg", "score": 0.6703171133995056}, {"anchor": "./images/web/dog/jackrussel1.jpg", "pair": "./images/web/people/boy1.jpg", "score": 0.309035062789917}, {"anchor": "./images/web/dog/jackrussel1.jpg", "pair": "./images/web/people/boy2.jpg", "score": 0.3479071259498596}, {"anchor": "./images/web/dog/jackrussel1.jpg", "pair": "./images/web/people/girl1.jpg", "score": 0.333255410194397}, {"anchor": "./images/web/dog/jackrussel1.jpg", "pair": "./images/web/people/girl2.jpg", "score": 0.43209952116012573}, {"anchor": "./images/web/dog/jackrussel1.jpg", "pair": "./images/web/tools/hammer1.jpg", "score": 0.31539446115493774}, {"anchor": "./images/web/dog/jackrussel1.jpg", "pair": "./images/web/tools/hammer2.jpg", "score": 0.38240331411361694}, {"anchor": "./images/web/dog/jackrussel1.jpg", "pair": "./images/web/tools/screwdriver1.jpg", "score": 0.366823673248291}, {"anchor": "./images/web/dog/jackrussel1.jpg", "pair": "./images/web/tools/screwdriver2.jpg", "score": 0.3810749053955078}, {"anchor": "./images/web/dog/jackrussel1.jpg", "pair": "./images/web/vehicles/car1.jpg", "score": 0.30199432373046875}, {"anchor": "./images/web/dog/jackrussel1.jpg", "pair": "./images/web/vehicles/car2.jpg", "score": 0.35175132751464844}, {"anchor": "./images/web/dog/jackrussel1.jpg", "pair": "./images/web/vehicles/motorcycle1.jpg", "score": 0.3651522696018219}, {"anchor": "./images/web/dog/jackrussel1.jpg", "pair": "./images/web/vehicles/motorcycle2.jpg", "score": 0.34299904108047485}, {"anchor": "./images/web/dog/jackrussell2.jpg", "pair": "./images/web/dog/labrador1.jpg", "score": 0.6522855758666992}, {"anchor": "./images/web/dog/jackrussell2.jpg", "pair": "./images/web/dog/labrador2.jpg", "score": 0.6961959600448608}, {"anchor": "./images/web/dog/jackrussell2.jpg", "pair": "./images/web/people/boy1.jpg", "score": 0.34765172004699707}, {"anchor": "./images/web/dog/jackrussell2.jpg", "pair": "./images/web/people/boy2.jpg", "score": 0.3811114430427551}, {"anchor": "./images/web/dog/jackrussell2.jpg", "pair": "./images/web/people/girl1.jpg", "score": 0.3346076011657715}, {"anchor": "./images/web/dog/jackrussell2.jpg", "pair": "./images/web/people/girl2.jpg", "score": 0.46207815408706665}, {"anchor": "./images/web/dog/jackrussell2.jpg", "pair": "./images/web/tools/hammer1.jpg", "score": 0.2962166965007782}, {"anchor": "./images/web/dog/jackrussell2.jpg", "pair": "./images/web/tools/hammer2.jpg", "score": 0.38727617263793945}, {"anchor": "./images/web/dog/jackrussell2.jpg", "pair": "./images/web/tools/screwdriver1.jpg", "score": 0.32394886016845703}, {"anchor": "./images/web/dog/jackrussell2.jpg", "pair": "./images/web/tools/screwdriver2.jpg", "score": 0.3261902928352356}, {"anchor": "./images/web/dog/jackrussell2.jpg", "pair": "./images/web/vehicles/car1.jpg", "score": 0.26569265127182007}, {"anchor": "./images/web/dog/jackrussell2.jpg", "pair": "./images/web/vehicles/car2.jpg", "score": 0.31030547618865967}, {"anchor": "./images/web/dog/jackrussell2.jpg", "pair": "./images/web/vehicles/motorcycle1.jpg", "score": 0.35556837916374207}, {"anchor": "./images/web/dog/jackrussell2.jpg", "pair": "./images/web/vehicles/motorcycle2.jpg", "score": 0.3335212469100952}, {"anchor": "./images/web/dog/labrador1.jpg", "pair": "./images/web/dog/labrador2.jpg", "score": 0.6261007785797119}, {"anchor": "./images/web/dog/labrador1.jpg", "pair": "./images/web/people/boy1.jpg", "score": 0.2914663255214691}, {"anchor": "./images/web/dog/labrador1.jpg", "pair": "./images/web/people/boy2.jpg", "score": 0.3491954803466797}, {"anchor": "./images/web/dog/labrador1.jpg", "pair": "./images/web/people/girl1.jpg", "score": 0.2865114212036133}, {"anchor": "./images/web/dog/labrador1.jpg", "pair": "./images/web/people/girl2.jpg", "score": 0.4686175584793091}, {"anchor": "./images/web/dog/labrador1.jpg", "pair": "./images/web/tools/hammer1.jpg", "score": 0.31003034114837646}, {"anchor": "./images/web/dog/labrador1.jpg", "pair": "./images/web/tools/hammer2.jpg", "score": 0.3420778512954712}, {"anchor": "./images/web/dog/labrador1.jpg", "pair": "./images/web/tools/screwdriver1.jpg", "score": 0.3168524503707886}, {"anchor": "./images/web/dog/labrador1.jpg", "pair": "./images/web/tools/screwdriver2.jpg", "score": 0.3431006669998169}, {"anchor": "./images/web/dog/labrador1.jpg", "pair": "./images/web/vehicles/car1.jpg", "score": 0.2528441250324249}, {"anchor": "./images/web/dog/labrador1.jpg", "pair": "./images/web/vehicles/car2.jpg", "score": 0.2630118429660797}, {"anchor": "./images/web/dog/labrador1.jpg", "pair": "./images/web/vehicles/motorcycle1.jpg", "score": 0.30167698860168457}, {"anchor": "./images/web/dog/labrador1.jpg", "pair": "./images/web/vehicles/motorcycle2.jpg", "score": 0.2940525710582733}, {"anchor": "./images/web/dog/labrador2.jpg", "pair": "./images/web/people/boy1.jpg", "score": 0.31175756454467773}, {"anchor": "./images/web/dog/labrador2.jpg", "pair": "./images/web/people/boy2.jpg", "score": 0.343988835811615}, {"anchor": "./images/web/dog/labrador2.jpg", "pair": "./images/web/people/girl1.jpg", "score": 0.3243519961833954}, {"anchor": "./images/web/dog/labrador2.jpg", "pair": "./images/web/people/girl2.jpg", "score": 0.3387695550918579}, {"anchor": "./images/web/dog/labrador2.jpg", "pair": "./images/web/tools/hammer1.jpg", "score": 0.30900752544403076}, {"anchor": "./images/web/dog/labrador2.jpg", "pair": "./images/web/tools/hammer2.jpg", "score": 0.37950778007507324}, {"anchor": "./images/web/dog/labrador2.jpg", "pair": "./images/web/tools/screwdriver1.jpg", "score": 0.3253931701183319}, {"anchor": "./images/web/dog/labrador2.jpg", "pair": "./images/web/tools/screwdriver2.jpg", "score": 0.32656949758529663}, {"anchor": "./images/web/dog/labrador2.jpg", "pair": "./images/web/vehicles/car1.jpg", "score": 0.22625643014907837}, {"anchor": "./images/web/dog/labrador2.jpg", "pair": "./images/web/vehicles/car2.jpg", "score": 0.2947690188884735}, {"anchor": "./images/web/dog/labrador2.jpg", "pair": "./images/web/vehicles/motorcycle1.jpg", "score": 0.3066211938858032}, {"anchor": "./images/web/dog/labrador2.jpg", "pair": "./images/web/vehicles/motorcycle2.jpg", "score": 0.30641037225723267}, {"anchor": "./images/web/people/boy1.jpg", "pair": "./images/web/people/boy2.jpg", "score": 0.49175429344177246}, {"anchor": "./images/web/people/boy1.jpg", "pair": "./images/web/people/girl1.jpg", "score": 0.32589423656463623}, {"anchor": "./images/web/people/boy1.jpg", "pair": "./images/web/people/girl2.jpg", "score": 0.2582888901233673}, {"anchor": "./images/web/people/boy1.jpg", "pair": "./images/web/tools/hammer1.jpg", "score": 0.2622150480747223}, {"anchor": "./images/web/people/boy1.jpg", "pair": "./images/web/tools/hammer2.jpg", "score": 0.34345921874046326}, {"anchor": "./images/web/people/boy1.jpg", "pair": "./images/web/tools/screwdriver1.jpg", "score": 0.24144893884658813}, {"anchor": "./images/web/people/boy1.jpg", "pair": "./images/web/tools/screwdriver2.jpg", "score": 0.2524341940879822}, {"anchor": "./images/web/people/boy1.jpg", "pair": "./images/web/vehicles/car1.jpg", "score": 0.2659519612789154}, {"anchor": "./images/web/people/boy1.jpg", "pair": "./images/web/vehicles/car2.jpg", "score": 0.24774318933486938}, {"anchor": "./images/web/people/boy1.jpg", "pair": "./images/web/vehicles/motorcycle1.jpg", "score": 0.33269384503364563}, {"anchor": "./images/web/people/boy1.jpg", "pair": "./images/web/vehicles/motorcycle2.jpg", "score": 0.3259020745754242}, {"anchor": "./images/web/people/boy2.jpg", "pair": "./images/web/people/girl1.jpg", "score": 0.4387813210487366}, {"anchor": "./images/web/people/boy2.jpg", "pair": "./images/web/people/girl2.jpg", "score": 0.3840779662132263}, {"anchor": "./images/web/people/boy2.jpg", "pair": "./images/web/tools/hammer1.jpg", "score": 0.2863399088382721}, {"anchor": "./images/web/people/boy2.jpg", "pair": "./images/web/tools/hammer2.jpg", "score": 0.3893859088420868}, {"anchor": "./images/web/people/boy2.jpg", "pair": "./images/web/tools/screwdriver1.jpg", "score": 0.3382037878036499}, {"anchor": "./images/web/people/boy2.jpg", "pair": "./images/web/tools/screwdriver2.jpg", "score": 0.3310142755508423}, {"anchor": "./images/web/people/boy2.jpg", "pair": "./images/web/vehicles/car1.jpg", "score": 0.23199462890625}, {"anchor": "./images/web/people/boy2.jpg", "pair": "./images/web/vehicles/car2.jpg", "score": 0.28145891427993774}, {"anchor": "./images/web/people/boy2.jpg", "pair": "./images/web/vehicles/motorcycle1.jpg", "score": 0.2988339066505432}, {"anchor": "./images/web/people/boy2.jpg", "pair": "./images/web/vehicles/motorcycle2.jpg", "score": 0.3412597179412842}, {"anchor": "./images/web/people/girl1.jpg", "pair": "./images/web/people/girl2.jpg", "score": 0.3868023157119751}, {"anchor": "./images/web/people/girl1.jpg", "pair": "./images/web/tools/hammer1.jpg", "score": 0.2546733617782593}, {"anchor": "./images/web/people/girl1.jpg", "pair": "./images/web/tools/hammer2.jpg", "score": 0.30117326974868774}, {"anchor": "./images/web/people/girl1.jpg", "pair": "./images/web/tools/screwdriver1.jpg", "score": 0.23033657670021057}, {"anchor": "./images/web/people/girl1.jpg", "pair": "./images/web/tools/screwdriver2.jpg", "score": 0.2899819016456604}, {"anchor": "./images/web/people/girl1.jpg", "pair": "./images/web/vehicles/car1.jpg", "score": 0.24522632360458374}, {"anchor": "./images/web/people/girl1.jpg", "pair": "./images/web/vehicles/car2.jpg", "score": 0.29945412278175354}, {"anchor": "./images/web/people/girl1.jpg", "pair": "./images/web/vehicles/motorcycle1.jpg", "score": 0.3095582127571106}, {"anchor": "./images/web/people/girl1.jpg", "pair": "./images/web/vehicles/motorcycle2.jpg", "score": 0.27539491653442383}, {"anchor": "./images/web/people/girl2.jpg", "pair": "./images/web/tools/hammer1.jpg", "score": 0.26249510049819946}, {"anchor": "./images/web/people/girl2.jpg", "pair": "./images/web/tools/hammer2.jpg", "score": 0.3661991357803345}, {"anchor": "./images/web/people/girl2.jpg", "pair": "./images/web/tools/screwdriver1.jpg", "score": 0.2927745580673218}, {"anchor": "./images/web/people/girl2.jpg", "pair": "./images/web/tools/screwdriver2.jpg", "score": 0.2910739779472351}, {"anchor": "./images/web/people/girl2.jpg", "pair": "./images/web/vehicles/car1.jpg", "score": 0.2719694674015045}, {"anchor": "./images/web/people/girl2.jpg", "pair": "./images/web/vehicles/car2.jpg", "score": 0.29201388359069824}, {"anchor": "./images/web/people/girl2.jpg", "pair": "./images/web/vehicles/motorcycle1.jpg", "score": 0.3224591016769409}, {"anchor": "./images/web/people/girl2.jpg", "pair": "./images/web/vehicles/motorcycle2.jpg", "score": 0.28597864508628845}, {"anchor": "./images/web/tools/hammer1.jpg", "pair": "./images/web/tools/hammer2.jpg", "score": 0.657188355922699}, {"anchor": "./images/web/tools/hammer1.jpg", "pair": "./images/web/tools/screwdriver1.jpg", "score": 0.6317839622497559}, {"anchor": "./images/web/tools/hammer1.jpg", "pair": "./images/web/tools/screwdriver2.jpg", "score": 0.620660662651062}, {"anchor": "./images/web/tools/hammer1.jpg", "pair": "./images/web/vehicles/car1.jpg", "score": 0.27841004729270935}, {"anchor": "./images/web/tools/hammer1.jpg", "pair": "./images/web/vehicles/car2.jpg", "score": 0.26956814527511597}, {"anchor": "./images/web/tools/hammer1.jpg", "pair": "./images/web/vehicles/motorcycle1.jpg", "score": 0.3014102578163147}, {"anchor": "./images/web/tools/hammer1.jpg", "pair": "./images/web/vehicles/motorcycle2.jpg", "score": 0.23985901474952698}, {"anchor": "./images/web/tools/hammer2.jpg", "pair": "./images/web/tools/screwdriver1.jpg", "score": 0.6622178554534912}, {"anchor": "./images/web/tools/hammer2.jpg", "pair": "./images/web/tools/screwdriver2.jpg", "score": 0.6329381465911865}, {"anchor": "./images/web/tools/hammer2.jpg", "pair": "./images/web/vehicles/car1.jpg", "score": 0.2537616789340973}, {"anchor": "./images/web/tools/hammer2.jpg", "pair": "./images/web/vehicles/car2.jpg", "score": 0.30125343799591064}, {"anchor": "./images/web/tools/hammer2.jpg", "pair": "./images/web/vehicles/motorcycle1.jpg", "score": 0.33065295219421387}, {"anchor": "./images/web/tools/hammer2.jpg", "pair": "./images/web/vehicles/motorcycle2.jpg", "score": 0.2961322069168091}, {"anchor": "./images/web/tools/screwdriver1.jpg", "pair": "./images/web/tools/screwdriver2.jpg", "score": 0.7480773329734802}, {"anchor": "./images/web/tools/screwdriver1.jpg", "pair": "./images/web/vehicles/car1.jpg", "score": 0.31675684452056885}, {"anchor": "./images/web/tools/screwdriver1.jpg", "pair": "./images/web/vehicles/car2.jpg", "score": 0.3321349322795868}, {"anchor": "./images/web/tools/screwdriver1.jpg", "pair": "./images/web/vehicles/motorcycle1.jpg", "score": 0.3238343596458435}, {"anchor": "./images/web/tools/screwdriver1.jpg", "pair": "./images/web/vehicles/motorcycle2.jpg", "score": 0.27900221943855286}, {"anchor": "./images/web/tools/screwdriver2.jpg", "pair": "./images/web/vehicles/car1.jpg", "score": 0.30386853218078613}, {"anchor": "./images/web/tools/screwdriver2.jpg", "pair": "./images/web/vehicles/car2.jpg", "score": 0.3225577771663666}, {"anchor": "./images/web/tools/screwdriver2.jpg", "pair": "./images/web/vehicles/motorcycle1.jpg", "score": 0.2990797162055969}, {"anchor": "./images/web/tools/screwdriver2.jpg", "pair": "./images/web/vehicles/motorcycle2.jpg", "score": 0.2639017403125763}, {"anchor": "./images/web/vehicles/car1.jpg", "pair": "./images/web/vehicles/car2.jpg", "score": 0.4885154664516449}, {"anchor": "./images/web/vehicles/car1.jpg", "pair": "./images/web/vehicles/motorcycle1.jpg", "score": 0.5159200429916382}, {"anchor": "./images/web/vehicles/car1.jpg", "pair": "./images/web/vehicles/motorcycle2.jpg", "score": 0.4091639518737793}, {"anchor": "./images/web/vehicles/car2.jpg", "pair": "./images/web/vehicles/motorcycle1.jpg", "score": 0.43009117245674133}, {"anchor": "./images/web/vehicles/car2.jpg", "pair": "./images/web/vehicles/motorcycle2.jpg", "score": 0.44476640224456787}, {"anchor": "./images/web/vehicles/motorcycle1.jpg", "pair": "./images/web/vehicles/motorcycle2.jpg", "score": 0.6040372252464294}]