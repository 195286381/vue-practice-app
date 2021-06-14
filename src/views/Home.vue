<template>
  <div class="home">
    <header>
      <h1 class="tac">Navigator By Xzzzz</h1>
    </header>
    <section>
      <div v-for="(value, key, index) in routeGroups" :key="index">
        <h2> 「{{ key }}」 </h2>
        <ul class="nav">
          <li v-for="(route, index) in value" :key="index">
            <router-link :to="route.path">
              {{route.name}}
            </router-link>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import _ from 'lodash'
import { routes } from '@/router/index'
export default {
  name: 'Home',
  data () {
    return {
      routes: []
    }
  },
  computed: {
    routeGroups () {
      return _.groupBy(this.routes, route => {
        if (_.isObject(route.meta) && _.isString(route.meta.group)) {
          return route.meta.group
        } else {
          return '未分组'
        }
      })
    }
  },
  mounted () {
    this.routes = routes
  }
}
</script>
<style scoped>
  header h1 {
    margin: 10px auto;
    color: gray;
  }
  ul.nav {
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
  }

  section h2 {
    border-top: 2px solid green;
    border-bottom: 2px solid green;
    margin-top: 40px;
    text-align: center;
    color: burlywood;
  }
  ul.nav  li {
    margin: 10px;
    font-weight: 700;
    color: red;

  }

  ul.nav li:hover {
    transform: scale(1.1);
    color: blue;
  }
</style>
