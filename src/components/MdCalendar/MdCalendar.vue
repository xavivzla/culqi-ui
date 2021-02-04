<template>
  <div class="md-calendar" :class="[$mdActiveTheme]">
    <div class="md-calendar__header">
      <span>{{ currentMonthLabel }} {{ currentYear }}</span>
      <span class="md-calendar__arrows">
        <span @click="previousMonth">
          <md-icon>keyboard_arrow_left</md-icon>
        </span>
        <span @click="nextMonth">
          <md-icon>keyboard_arrow_right</md-icon>
        </span>
      </span>
    </div>
    <div class="md-calendar__table">
      <div class="md-calendar__week"
      v-for="(dayLabel, index) in dayLabels"
      :class="weekClass(index)"
      :key="dayLabel + '-' + index">
      {{ dayLabel }}
      </div>
      <div v-for="(day, index) in dates"
        class="md-calendar__item"
        :key="day + '-' + index"
        :class="dayClassObj(day)">
        <!-- <button @click="setSelectedDate(day)"> -->
          <span class="md-calendar__day">{{ day.date | formatDateToDay }}</span>
        <!-- </button> -->
        <div class="md-calendar__icons">
          <span v-for="icon in day.icon" :key="icon" v-html="icon" />
        </div>
        <div class="md-calendar__content">
          <div v-for="content in day.content" :key="content" v-html="content" />
          <!-- {{day.date | returnCurrentDate}} -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { format,
startOfMonth,
lastDayOfMonth,
getDay,
addDays,
eachDayOfInterval,
isSameMonth,
isToday,
isSunday,
isSaturday,
addMonths,
isSameDay, 
isEqual} from 'date-fns'
const DAY_LABELS = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
const MONTH_LABELS = [
  "Enero", "Febrero", "Marzo",
  "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre",
  "Octubre", "Noviembre", "Diciembre"];
import MdComponent from 'core/MdComponent'

export default new MdComponent({
  name: 'MdCalendar',
  filters: {
    formatDateToDay(val) {
      return format(val, 'd');
    }
  },
  props: {
    mdDates: {
      required: false,
      type: Array
    },
    startDate: {
      required: false,
      type: Date,
    }
  },
  data() {
    return {
      today: null,
      selectedDate: null,
      currDateCursor: null,
      dayLabels: null,
    };
  },
  created() {
    this.dayLabels = DAY_LABELS.slice();
    this.today = new Date();
    this.selectedDate = this.today;
    this.currDateCursor = this.today;
  },

  mounted() {
    if (this.startDate) {
      this.currDateCursor = this.startDate;
      this.selectedDate = this.startDate;
    }
  },

  computed: {
    currentMonth() {
      return this.currDateCursor.getMonth();
    },
    currentYear() {
      return this.currDateCursor.getFullYear();
    },
    currentMonthLabel() {
      return MONTH_LABELS[this.currentMonth];
    },
    dates() {
      const cursorDate = this.currDateCursor;
      let startDate = startOfMonth(cursorDate),
        endDate = lastDayOfMonth(cursorDate);
      const daysNeededForLastMonth = getDay(startDate),
        daysNeededForNextMonth = 6 - getDay(endDate);
      startDate = addDays(startDate, -daysNeededForLastMonth);
      endDate = addDays(endDate, daysNeededForNextMonth);
      // console.log("dededede!", this.mdDates.filter(({date}) => isEqual(new Date(date), new Date(val))))
      
      return eachDayOfInterval({start: startDate, end: endDate}).map(date => {
        let filterData = this.mdDates.filter(({date: dateCalendar, ...other}) => {
          let dateReceived = format(new Date(dateCalendar), 'dd/MM/yyyy')
          let dateLocal = format(new Date(date), 'dd/MM/yyyy')
          if(isEqual(new Date(dateReceived), new Date(dateLocal))) return other
        })[0]

        let content = []
        let icon = []
        if(filterData) {
          if(filterData.icons) {
            icon = filterData.icons.map(item => {
              switch (item) {
              case 'pos':
                  
                return `
                  <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.47333 11.5267C6.44054 11.4966 6.40481 11.4698 6.36667 11.4467C6.33263 11.4204 6.29429 11.4001 6.25333 11.3867C6.21364 11.3664 6.17082 11.3529 6.12667 11.3467C5.99895 11.3197 5.86596 11.3337 5.74667 11.3867C5.66394 11.4167 5.5888 11.4645 5.52659 11.5267C5.46438 11.5889 5.41661 11.664 5.38667 11.7467C5.34935 11.8259 5.33108 11.9126 5.33333 12.0001C5.33227 12.0868 5.34812 12.1728 5.38 12.2534C5.41865 12.3331 5.468 12.4071 5.52667 12.4734C5.58896 12.5352 5.66284 12.5841 5.74406 12.6173C5.82529 12.6504 5.91226 12.6673 6 12.6667C6.08745 12.669 6.17421 12.6507 6.25333 12.6134C6.33412 12.5797 6.40853 12.5323 6.47333 12.4734C6.53512 12.4111 6.584 12.3372 6.61718 12.256C6.65036 12.1748 6.66717 12.0878 6.66667 12.0001C6.66561 11.913 6.64749 11.8269 6.61333 11.7467C6.5816 11.6649 6.53403 11.5901 6.47333 11.5267ZM3.7 8.78008C3.66597 8.75369 3.62762 8.73339 3.58667 8.72008C3.54784 8.69513 3.50498 8.67708 3.46 8.66675C3.37448 8.64684 3.28552 8.64684 3.2 8.66675L3.08 8.70675L2.96 8.76675L2.86 8.84675C2.73502 8.97785 2.66572 9.15229 2.66667 9.33341C2.66616 9.42115 2.68298 9.50813 2.71615 9.58935C2.74933 9.67058 2.79821 9.74445 2.86 9.80675C2.9248 9.86563 2.99921 9.91299 3.08 9.94675C3.181 9.98824 3.29064 10.0043 3.3993 9.99349C3.50795 9.98269 3.61229 9.94536 3.70314 9.88479C3.79399 9.82423 3.86858 9.74227 3.92034 9.64613C3.9721 9.54999 3.99946 9.4426 4 9.33341C3.99754 9.1569 3.92849 8.98784 3.80667 8.86008L3.7 8.78008ZM3.80667 11.5267C3.74326 11.4661 3.6685 11.4185 3.58667 11.3867C3.46599 11.3308 3.33132 11.3122 3.2 11.3334L3.08 11.3734C3.03752 11.388 2.99716 11.4082 2.96 11.4334C2.92508 11.458 2.89168 11.4847 2.86 11.5134C2.79931 11.5768 2.75173 11.6516 2.72 11.7334C2.68473 11.8132 2.66651 11.8995 2.66651 11.9867C2.66651 12.074 2.68473 12.1603 2.72 12.2401C2.75376 12.3209 2.80111 12.3953 2.86 12.4601C2.92118 12.5243 2.99456 12.5756 3.07584 12.6111C3.15712 12.6466 3.24466 12.6655 3.33333 12.6667C3.42078 12.669 3.50755 12.6507 3.58667 12.6134C3.66746 12.5797 3.74187 12.5323 3.80667 12.4734C3.86555 12.4086 3.91291 12.3342 3.94667 12.2534C3.98194 12.1736 4.00016 12.0873 4.00016 12.0001C4.00016 11.9128 3.98194 11.8265 3.94667 11.7467C3.91494 11.6649 3.86736 11.5901 3.80667 11.5267ZM5.74667 8.72008C5.66483 8.75181 5.59007 8.79939 5.52667 8.86008C5.40484 8.98784 5.33579 9.1569 5.33333 9.33341C5.33388 9.4426 5.36123 9.54999 5.41299 9.64613C5.46476 9.74227 5.53934 9.82423 5.63019 9.88479C5.72104 9.94536 5.82538 9.98269 5.93404 9.99349C6.04269 10.0043 6.15233 9.98824 6.25333 9.94675C6.33412 9.91299 6.40853 9.86563 6.47333 9.80675C6.53512 9.74445 6.584 9.67058 6.61718 9.58935C6.65036 9.50813 6.66717 9.42115 6.66667 9.33341C6.66421 9.1569 6.59516 8.98784 6.47333 8.86008C6.37958 8.76758 6.26054 8.70491 6.13121 8.67999C6.00188 8.65508 5.86807 8.66903 5.74667 8.72008ZM9.14 11.5267C9.0752 11.4679 9.00079 11.4205 8.92 11.3867C8.79859 11.3357 8.66478 11.3217 8.53546 11.3467C8.40613 11.3716 8.28708 11.4342 8.19333 11.5267C8.13264 11.5901 8.08506 11.6649 8.05333 11.7467C8.01806 11.8265 7.99985 11.9128 7.99985 12.0001C7.99985 12.0873 8.01806 12.1736 8.05333 12.2534C8.08709 12.3342 8.13445 12.4086 8.19333 12.4734C8.25563 12.5352 8.3295 12.5841 8.41073 12.6173C8.49195 12.6504 8.57893 12.6673 8.66667 12.6667C8.75412 12.669 8.84088 12.6507 8.92 12.6134C9.00079 12.5797 9.0752 12.5323 9.14 12.4734C9.2325 12.3797 9.29517 12.2606 9.32009 12.1313C9.345 12.002 9.33105 11.8682 9.28 11.7467C9.24827 11.6649 9.20069 11.5901 9.14 11.5267ZM8.66667 3.33341H3.33333C3.15652 3.33341 2.98695 3.40365 2.86193 3.52868C2.7369 3.6537 2.66667 3.82327 2.66667 4.00008V6.66675C2.66667 6.84356 2.7369 7.01313 2.86193 7.13815C2.98695 7.26318 3.15652 7.33341 3.33333 7.33341H8.66667C8.84348 7.33341 9.01305 7.26318 9.13807 7.13815C9.2631 7.01313 9.33333 6.84356 9.33333 6.66675V4.00008C9.33333 3.82327 9.2631 3.6537 9.13807 3.52868C9.01305 3.40365 8.84348 3.33341 8.66667 3.33341ZM8 6.00008H4V4.66675H8V6.00008ZM10 0.666748H2C1.46957 0.666748 0.960859 0.877462 0.585787 1.25253C0.210714 1.62761 0 2.13631 0 2.66675V13.3334C0 13.8638 0.210714 14.3726 0.585787 14.7476C0.960859 15.1227 1.46957 15.3334 2 15.3334H10C10.5304 15.3334 11.0391 15.1227 11.4142 14.7476C11.7893 14.3726 12 13.8638 12 13.3334V2.66675C12 2.13631 11.7893 1.62761 11.4142 1.25253C11.0391 0.877462 10.5304 0.666748 10 0.666748ZM10.6667 13.3334C10.6667 13.5102 10.5964 13.6798 10.4714 13.8048C10.3464 13.9298 10.1768 14.0001 10 14.0001H2C1.82319 14.0001 1.65362 13.9298 1.5286 13.8048C1.40357 13.6798 1.33333 13.5102 1.33333 13.3334V2.66675C1.33333 2.48994 1.40357 2.32037 1.5286 2.19534C1.65362 2.07032 1.82319 2.00008 2 2.00008H10C10.1768 2.00008 10.3464 2.07032 10.4714 2.19534C10.5964 2.32037 10.6667 2.48994 10.6667 2.66675V13.3334ZM9.03333 8.78008C8.9993 8.75369 8.96096 8.73339 8.92 8.72008C8.8803 8.69978 8.83749 8.68626 8.79333 8.68008C8.70781 8.66017 8.61886 8.66017 8.53333 8.68008L8.41333 8.72008L8.29333 8.78008L8.19333 8.86008C8.07151 8.98784 8.00246 9.1569 8 9.33341C8.00054 9.4426 8.0279 9.54999 8.07966 9.64613C8.13142 9.74227 8.20601 9.82423 8.29686 9.88479C8.38771 9.94536 8.49205 9.98269 8.6007 9.99349C8.70936 10.0043 8.819 9.98824 8.92 9.94675C9.00079 9.91299 9.0752 9.86563 9.14 9.80675C9.20179 9.74445 9.25067 9.67058 9.28385 9.58935C9.31702 9.50813 9.33384 9.42115 9.33333 9.33341C9.33088 9.1569 9.26182 8.98784 9.14 8.86008L9.03333 8.78008Z" fill="#B1B8C1"/>
</svg>
                  `
              case 'online':
                return  `
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 9.66659H3.66671C3.4899 9.66659 3.32033 9.59635 3.1953 9.47132C3.07028 9.3463 3.00004 9.17673 3.00004 8.99992C3.00004 8.82311 3.07028 8.65354 3.1953 8.52851C3.32033 8.40349 3.4899 8.33325 3.66671 8.33325H10.6267C11.0725 8.33328 11.5055 8.18438 11.857 7.9102C12.2084 7.63603 12.4582 7.25229 12.5667 6.81992L13.6667 2.49325C13.6917 2.39486 13.6938 2.29206 13.673 2.1927C13.6523 2.09334 13.609 2.00004 13.5467 1.91992C13.4819 1.83774 13.3986 1.77198 13.3036 1.72797C13.2087 1.68396 13.1047 1.66293 13 1.66659H3.50671C3.36917 1.27755 3.11466 0.940584 2.77808 0.701878C2.44151 0.463171 2.03934 0.334412 1.62671 0.333252H1.00004C0.82323 0.333252 0.65366 0.40349 0.528636 0.528514C0.403612 0.653538 0.333374 0.823108 0.333374 0.999919C0.333374 1.17673 0.403612 1.3463 0.528636 1.47132C0.65366 1.59635 0.82323 1.66659 1.00004 1.66659H1.62671C1.779 1.66215 1.92821 1.71001 2.04951 1.80219C2.17081 1.89438 2.25687 2.02533 2.29337 2.17325L2.33337 2.49325L3.48671 6.99992C2.95627 7.02379 2.45705 7.25739 2.09885 7.64934C1.74066 8.0413 1.55284 8.55949 1.57671 9.08992C1.60058 9.62035 1.83418 10.1196 2.22613 10.4778C2.61808 10.836 3.13627 11.0238 3.66671 10.9999H3.78671C3.67706 11.302 3.64183 11.6261 3.68399 11.9447C3.72616 12.2632 3.84447 12.567 4.02892 12.8302C4.21337 13.0933 4.45852 13.3082 4.74361 13.4565C5.0287 13.6048 5.34534 13.6823 5.66671 13.6823C5.98808 13.6823 6.30471 13.6048 6.58981 13.4565C6.8749 13.3082 7.12005 13.0933 7.30449 12.8302C7.48894 12.567 7.60726 12.2632 7.64942 11.9447C7.69158 11.6261 7.65635 11.302 7.54671 10.9999H9.12004C9.0104 11.302 8.97517 11.6261 9.01733 11.9447C9.05949 12.2632 9.1778 12.567 9.36225 12.8302C9.5467 13.0933 9.79185 13.3082 10.0769 13.4565C10.362 13.6048 10.6787 13.6823 11 13.6823C11.3214 13.6823 11.638 13.6048 11.9231 13.4565C12.2082 13.3082 12.4534 13.0933 12.6378 12.8302C12.8223 12.567 12.9406 12.2632 12.9828 11.9447C13.0249 11.6261 12.9897 11.302 12.88 10.9999H13C13.1769 10.9999 13.3464 10.9297 13.4714 10.8047C13.5965 10.6796 13.6667 10.5101 13.6667 10.3333C13.6667 10.1564 13.5965 9.98687 13.4714 9.86185C13.3464 9.73682 13.1769 9.66659 13 9.66659ZM12.1467 2.99992L11.2734 6.49325C11.2369 6.64117 11.1508 6.77212 11.0295 6.86431C10.9082 6.9565 10.759 7.00436 10.6067 6.99992H4.85337L3.85337 2.99992H12.1467ZM5.66671 12.3333C5.53485 12.3333 5.40596 12.2942 5.29633 12.2209C5.18669 12.1476 5.10125 12.0435 5.05079 11.9217C5.00033 11.7999 4.98713 11.6658 5.01285 11.5365C5.03857 11.4072 5.10207 11.2884 5.1953 11.1952C5.28854 11.1019 5.40733 11.0385 5.53665 11.0127C5.66597 10.987 5.80001 11.0002 5.92183 11.0507C6.04365 11.1011 6.14777 11.1866 6.22102 11.2962C6.29427 11.4058 6.33337 11.5347 6.33337 11.6666C6.33337 11.8434 6.26314 12.013 6.13811 12.138C6.01309 12.263 5.84352 12.3333 5.66671 12.3333ZM11 12.3333C10.8682 12.3333 10.7393 12.2942 10.6297 12.2209C10.52 12.1476 10.4346 12.0435 10.3841 11.9217C10.3337 11.7999 10.3205 11.6658 10.3462 11.5365C10.3719 11.4072 10.4354 11.2884 10.5286 11.1952C10.6219 11.1019 10.7407 11.0385 10.87 11.0127C10.9993 10.987 11.1333 11.0002 11.2552 11.0507C11.377 11.1011 11.4811 11.1866 11.5544 11.2962C11.6276 11.4058 11.6667 11.5347 11.6667 11.6666C11.6667 11.8434 11.5965 12.013 11.4714 12.138C11.3464 12.263 11.1769 12.3333 11 12.3333Z" fill="#B1B8C1"/>
</svg>

                `
              }
            })
          }
          if(filterData) {
            content = filterData.contents.map(item => {
              switch (item.type) {
              case 'chip':
                return `
                  <div class="md-status ${this.statusClass(item.status)}">
                    <span> </span>
                    ${item.value}
                  </div>
                `
              default:
                return `<p>${item.value}</p>`
              }
  
            })
          }
        }

        return ({
          date,
          content,
          icon,
          isCurrentMonth: isSameMonth(cursorDate, date),
          isToday: isToday(date),
          isSelected: isSameDay(this.selectedDate, date),
          isSaturday: isSaturday(date),
          isSunday: isSunday(date)
        })
      });

    },
  },

  methods: {
    // eslint-disable-next-line complexity
    statusClass(val) {
      switch (val) {
      case 'pendiente':
        return 'status-pendint' // gray

      case 'Exitosa'    :
      case 'Registrada' :
      case 'Autorizada' :
      case 'Capturada'  :
      case 'Capturar'   :
      case 'Autorizar'  :
      case 'Deposito'   :
      case 'Exito'      :
        return 'status-complete' // green

      case 'Devuelta'           :
      case 'Retenida'           :
      case 'Cancelacion parcial':
      case 'Devolver'           :
      case 'Expirar'            :
        return 'status-return' // orange

      case 'Depositada' :
      case 'Registrar'  :
      case 'Pagar'      :
      case 'Crear'      :
        return 'status-deposit' // blue

      case 'Denegada'         :
      case 'Denegar'          :
      case 'Anulada'          :
      case 'Fraudulenta'      :
      case 'Cancelacion total':
      case 'Sostener'         :
      case 'Fraude'           :
      case 'Borrar'           :
        return 'status-denied' // red

      default:
        return {}
      }
    },
    weekClass(week) {
      if(week === 0 || week === 6) {
        return 'disabled'
      }
    },
    dayClassObj(day) {
      return {
        'today' : day.isToday,
        'current': day.isCurrentMonth,
        'selected': day.isSelected,
        'saturday': day.isSaturday,
        'sunday': day.isSunday
      };
    },
    nextMonth() {
      this.currDateCursor = addMonths(this.currDateCursor, 1);
      this.$emit('input', this.currDateCursor);
    },
    previousMonth() {
      this.currDateCursor = addMonths(this.currDateCursor, -1);
      this.$emit('input', this.currDateCursor);
    },
    setSelectedDate(day) {
      this.selectedDate = day.date;
      this.$emit('input', this.selectedDate);
      // change calendar to correct month if they select previous or next month's days
      if (!day.isCurrentMonth) {
        const selectedMonth = dateFns.getMonth(this.selectedDate);
        this.currDateCursor = dateFns.setMonth(this.currDateCursor, selectedMonth);
      }
    }
  },
})
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

   .md-status {
    background: #E2E5E8;
    border: 1px solid #D4D8DD;
    box-sizing: border-box;
    border-radius: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    font-family: Archivo;
    font-style: normal;
    font-weight: normal;
    font-size: 14.22px;
    color: #2F384F;
    padding: 4px 6px;
    span {
      width: 6px;
      height: 6px;
      background: #2F384F;
      border-radius: 1px;
      transform: rotate(45deg);
      margin-right: 5px;
    }
    &.status-pendint{

    }
    &.status-complete{
      background: #E7F6F0;
      color: #20764C;
      border-color: #D3EEE3;
      span{
        background: #20764C;
      }
    }
    &.status-return{
      background: #FFF8E0;
      color: #AE7700;
      border-color: #FFF3C7;
      span{
        background: #AE7700;
      }
    }
    &.status-deposit{
      background: #E8F6FC;
      color: #24729E;
      border-color: #D4EEF9;
      span{
        background: #24729E;
      }
    }
    &.status-denied{
      background: #FBE7E2;
      color: #A52007;
      border-color: #F8D3C9;
      span{
        background: #A52007;
      }
    }
  }

  .md-calendar {
    transition: .3s $md-transition-default-timing;
    &__table {
      border-radius: 3px;
      display: grid;
      grid-template-columns: repeat(7, 1fr);
    }
    &__header {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #3E4B61;
      margin-bottom: 20px;
    }
    &__arrows {
      display: flex;
      align-items: center;
      margin-left: 30px;
    }
    &__item {
      border: solid 1px #e2e5e8;
      min-height: 112px;
      position: relative;
      &.current {
        .md-calendar__day {
          color: #677487;
        }
      }
      &.today {
        .md-calendar__day {
          color: #fff;
          background: #3CB4E5;
        }
      }
      &.saturday,
      &.sunday {
        .md-calendar__content {
          opacity: .5;
        }
      }
    }
    &__day {
      position: absolute;
      left: 6px;
      top: 6px;
      width: 24px;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      color: #B1B8C1;
      border-radius: 50%;
    }
    &__content{
      margin-top: 30px;
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      font-family: 'Archivo';
      font-style: normal;
      font-weight: 600;
      font-size: 15px;
      line-height: 20px;
      color: #3E4B61;
    }
    &__icons {
      position: absolute;
      right: 10px;
      top: 10px;
    }
    &__week {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 20px;
      text-align: center;
      color: #677487;
      border: solid 1px #e2e5e8;
      border-bottom: none;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      &.disabled {
        opacity: .5;
      }
    }
  }
</style>