<template>

  <div class="container">
    <div class="sub-container"> <!-- Контент не показывается во время загрузки -->
    <pre class="annotation_ru none" style="text-align: left; opacity:0;">Фестиваль психогеографии, организуемый своими силами, без административной и какой-либо материальной поддержки, в рамках которого участники отказываются от всякого жилья и средств коммуникации, с целью приобретения особого опыта, либо извлечения эмоций и переживаний от окружающего пространства. Фестиваль призван объединить различные урбанистические течения, такие как:<br>— психогеография (изучение эффектов территориального окружения)<br>— диггерство (изучение брошенных мест в городе)<br>— руферство (созерцание города с крыш зданий)<br>— паркур (как свобода перемещения)<br>— стрит-арт (как форма творчества)<br><br><b>Документация:</b><br><a href='https://www.vk.com/dreiffestival' target='_blank'>vk</a><br><a href='https://yadi.sk/i/aAjeLwfMtEvHn' target='_blank'>Отчёт</a><br><a href='https://yandex.ru/maps/-/CBBGvGHqdB' target='_blank'>Карта дрейфующего</a>

    </pre>
    <pre class="annotation_en" style="text-align: left;">A psychogeography festival «Dérive» organized by the participants themselves, without administrative or material support, in which they give up all accommodation and means of communication in order to gain special experience or to extract emotions and experiences from the surrounding environment. The aim of the festival is to bring together different urban currents, such as:
    - Psychogeography (study of the effects of the territorial environment)
    - Diggering (study of abandoned sites in the city)
    - Roofing (contemplation of the city from the roofs of buildings)
    - Parkour (as freedom of movement)
    - Street art (as a form of creativity)

    Documentation:
    See festival <a href="https://yadi.sk/i/aAjeLwfMtEvHn">report</a>
    <a href="https://www.vk.com/dreiffestival">VK</a> group
    We also made a <a href="https://yandex.ru/maps/-/CBBGvGHqdB">map</a> of the drifting
    </pre><br>
    <div class="drift_fest" v-for="(drift_fest, index) in drift_festArray" v-bind:index="index" v-bind:key="drift_fest.index"> <!-- При использовании v-for на компонентах обязательно указывать key и явно использовать входные параметры -->
      <h3>{{drift_fest.title}}</h3> <!-- Заголовок -->
      <pre v-html="drift_fest.body"></pre> <!-- Текст -->
      <div v-lazy-container="{ selector: 'img' }">
        <img v-bind:data-src="drift_fest.img"> <!-- Картинка -->
      </div>
    </div>
    </div> 
  </div>
 
</template>

<script>

 export default {
   head: {
    title: "Kiuss Group — Dérive festival",
    meta: [{ hid: "description", name: "description", content: "Группа Кюс — Фестиваль Дрейф" },]
  },
    data: function() {
      return {
        
        drift_festArray: 
[
    {  "id": 1,
      "title": null,
      "body":  null,
      "img": "/images/projects/drift_fest/1.jpg"
    },
    {
      "id": 2,
      "title": null,
      "body": null,
      "img": "/images/projects/drift_fest/2.jpg"
    },
    {
      "id": 3,
      "title": null,
      "body": null,
      "img": "/images/projects/drift_fest/3.jpg"
    },
    {
      "id": 4,
      "title": null,
      "body": null,
      "img": "/images/projects/drift_fest/4.jpg"
    }, 
    {
      "id": 5,
      "title": null,
      "body": null,      
      "img": "/images/projects/drift_fest/5.jpg"
    }
  ]
      }
    },

    methods: {  
      
      

      ruen_check: function() {//функция проверяет подзагруженную страницу и приводит к соответствию с выбранным языком  
        if(ruen_status)
             {
               $('.ru').transition({opacity: 0 }, 1, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');
               $('.annotation_ru').transition({opacity: 0 }, 1, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');
            
            setTimeout(function(){
                $('.ru').addClass('none');
                $('.annotation_ru').addClass('none');
                $('.en').removeClass('none');
                $('.annotation_en').removeClass('none').transition({opacity: 1 }, 1, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');
                // $('.en').transition({opacity: 1 }, 1, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');
               }, 1);
			   
             }
             
            else
             {
                
               $('.en').transition({opacity: 0 }, 1, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');
               $('.annotation_en').transition({opacity: 0 }, 1, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');

               setTimeout(function(){
                   $('.en').addClass('none');
                   $('.annotation_en').addClass('none');
                   $('.ru').removeClass('none');
                   $('.annotation_ru').removeClass('none').transition({opacity: 1 }, 1, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');;
                  //  $('.ru').transition({opacity: 1 }, 1, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');
                  }, 1);
               
             }
      }
    },
    
    mounted: function() {//Вызывается синхронно сразу после создания экземпляра
        
        this.ruen_check();
    }
  }

</script>

<style>

</style>