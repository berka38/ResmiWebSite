<template>
    <div class="card col-12 d-flex justify-content-center align-items-center" style="height: 100vh;">
        <div class="card col-7 shadow ">
            <div class="card-body" >
                <div class="p-2 card col-7 float-start rounded-0" style="max-height: 30rem;">
                    <div class="card-body">
                        <div>
                            <label for="Email" class="fw-bold">Email</label>
                            <input class="input-group-text col-12" type="email" id="Email" placeholder="Örnekmail@gmail.com">
                        </div>
                        <div class=" d-flex flex-row justify-content-around" style="margin-top: 5%;">
                            <div class="card col-6"> 
                                <label class="fw-bold" for="gönderenIsim">isim</label>
                                <input class="input-group-text" type="text" id="gönderenIsim" placeholder="Ahmet">
                            </div>
                            <div class="card col-6">
                                <label class="fw-bold" for="gönderenSoyisim">Soyisim</label>
                                <input class="input-group-text" type="text" id="gönderenSoyisim" placeholder="Özdemir">
                            </div>

                        </div>
                    </div>
                    <label class="fw-bold" for="iletisimTextarea">Mesajınız</label>
                    <textarea name="" id="iletisimTextarea" cols="30" rows="10"></textarea>
                </div>
                <div class="p-2 card col-5 float-end rounded-0"  style="min-height: 30rem;">
                    <h2>İletişim ve sosyal medya</h2>
                    <span class="card col-12 text-bg-dark"></span>
                    <div class="card-body d-flex align-items-center flex-column">
                        <h3>+90 553 553 5353 </h3>

                        <div class="btn btn-primary" style="margin: 1%;">İnstagram</div>
                        <div class="btn btn-primary" style="margin: 1%;">Gmail    </div>
                        <div class="btn btn-primary" style="margin: 1%;">Youtube</div>
                        <div class="btn btn-primary" style="margin: 1%;">Linkedin</div>
                        <div class="btn btn-primary" style="margin: 1%;">Github</div>

                    </div>
                </div>
            </div>
        </div>
    </div>

</template>