<template>
  <div class="right-container rounded-r-3xl">
    <div class="sidebar__shortcuts">
      <p class="sidebar__shortcuts-title font-bold pt-2">
        Shortcuts
        <i class="fas fa-stream js-hide-sidebar hidden"></i>
      </p>
      <div class="sidebar__shortcuts-items">
        <span class="sidebar__shortcuts-item"
          >Chill
          <img src="/img/snow.png" alt="" />
        </span>
        <span class="sidebar__shortcuts-item"
          >Hot
          <img src="/img/star.png" alt="" />
        </span>
        <span class="sidebar__shortcuts-item"
          >Piano instrumental
          <img src="/img/piano.png" alt="" />
        </span>
        <span class="sidebar__shortcuts-item"
          >Jazz
          <img src="/img/jazz.png" alt="" />
        </span>
        <span class="sidebar__shortcuts-item"
          >Acoustic
          <img src="/img/ghitar.png" alt="" />
        </span>
      </div>
    </div>

    <div class="sidebar__favorite">
      <p class="sidebar__favorite-title">Favorite Artists</p>
      <div
        class="sidebar__favorite-list flex justify-between items-center p-1.5 text-sm"
        v-for="i in 2"
        :key="i"
      >
        <div class="artist-info__avt flex items-center">
          <img src="/img/tóc-tiên.jpg" alt="" class="w-8 h-8 rounded-full" />
          <div class="artist-info ml-2">
            <h4 class="artist-info__name font-semibold text-xs">Tóc Tiên</h4>
            <p class="artist-info__song text-xs text-gray-500">
              6 songs in library
            </p>
          </div>
        </div>
        <i class="fas fa-ellipsis-h"></i>
      </div>
    </div>

    <div class="sidebar__suggest-album cursor-pointer">
      <div class="suggest-album bg-white p-0.25 rounded-lg">
        <div class="split third">
          <div class="cover">
            <img src="/img/ngô-lan-hương.jpg" />
          </div>
        </div>
        <div class="suggest-album__content flex justify-between px-3 py-1">
          <div class="suggest-album__info text-xs">
            <h4 class="font-semibold">Anh muốn đưa em về không</h4>
            <p>Ngô Lan Hương</p>
          </div>
          <i class="far fa-plus-square"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar__shortcuts-item {
  display: inline-flex;
  align-items: center;
  background: white;
  padding: 0.25rem 0.5rem;
  object-fit: contain;
  width: fit-content;
  margin: 0.3rem 0.3rem 0.3rem 0;
  border-radius: 1rem;
  font-size: 0.7rem;
  font-weight: 600;
}
.sidebar__shortcuts-item > img {
  width: 0.75rem;
  height: 0.75rem;
  margin-left: 0.25rem;
}

.split.third {
  display: block;
  overflow: hidden;
  margin: 1rem;
  cursor: pointer;
  border-radius: 0.5rem;
}
.split.third img {
  width: 100%;
  height: auto;
  -webkit-transition: -webkit-transform 0.5s ease;
  transition: -webkit-transform 1s ease;
  transition: transform 1s ease;
  transition: transform 1s ease, -webkit-transform 1s ease;
}
.split.third:hover img {
  -webkit-transform: scale(1.15);
  transform: scale(1.15);
}
</style>
