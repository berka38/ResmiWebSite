<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary navbar bg-dark border-bottom border-bottom-dark"  data-bs-theme="dark">
        <div class="container-fluid">
          <router-link class="navbar-brand" to="/testpage"> Karaca</router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link active" to="/anasayfa">Ana sayfa</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link active" to="/hakkimizda">Hakkimizda</router-link>

              </li>
              <li class="nav-item">
                <router-link class="nav-link active" to="/iletisim">İletisim</router-link>
              </li>
            </ul>

          </div>
        </div>
    </nav>
    <router-view></router-view>
    <footer class="bd-footer py-4 py-md-5 bg-body-tertiary">
        <div class="container py-4 py-md-5 px-4 px-md-3 text-body-secondary">
          <div class="row">
            <div class="col-lg-3 mb-3">
              <a class="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none" href="/" aria-label="Bootstrap">
                <span class="fs-5">Karaca Yazılım</span>
              </a>
              <ul class="list-unstyled small">
                <li class="mb-2">Web site tasarımcısı <a href="https://instagram.com/bertkrc">Berat Karaca</a> .</li>
                <li class="mb-2">Code licensed <a href="" target="_blank" rel="license noopener">MIT</a>, docs <a href="" target="_blank" rel="license noopener">CC BY 3.0</a>.</li>
                <li class="mb-2">Karaca yazılım</li>
              </ul>
            </div>
            <div class="col-8 col-lg-2 offset-lg-1 mb-3">
              <h5>Sayfalar</h5>
              <ul class="list-unstyled">
                <li class="mb-2"><a href="index.html">Ana sayfa</a></li>
                <li class="mb-2"><a href="hakkimizda.html">Hakkımızda</a></li>
                <li class="mb-2"><a href="iletisim.html">İletişim</a></li>
              </ul>
            </div>
            <div class="col-8 col-lg-2 mb-3">
              <h5>Yaptığımız işler</h5>
              <ul class="list-unstyled">
                <li class="mb-2"><a href="https://github.com/twbs/bootstrap">Ünlem bilişim</a></li>

              </ul>
            </div>
            <div class="col-8 col-lg-2 mb-3">
              <h5>Partnerlerimiz</h5>
              <ul class="list-unstyled">
                <li class="mb-2"><a href="https://github.com/twbs/bootstrap/issues">Kimse</a></li>

              </ul>
            </div>
          </div>
        </div>
      </footer>
</template>
<script>
import {defineComponent} from "vue";

export default defineComponent({
    name: "Autlayout",
});
</script>