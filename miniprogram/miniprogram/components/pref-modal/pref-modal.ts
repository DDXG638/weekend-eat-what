// pref-modal.ts - 偏好设置浮层组件
import { ComponentWithComputed } from 'miniprogram-computed'
import { regions, cuisines, tastes } from '../../utils/constants'

interface OptionItem {
  name: string;
  selected: boolean;
}

interface ComponentData {
  visible: boolean;
  title: string;
  subtitle: string;
  showRegion: boolean;
  showCuisine: boolean;
  showTaste: boolean;
  regionLabel: string;
  regionPlaceholder: string;
  cuisineLabel: string;
  tasteLabel: string;
  confirmText: string;
  selectedRegion: string;
  selectedCuisines: string[];
  selectedTastes: string[];
  regions: string[];
}

function generateOptions(options: string[], selected: string[]): OptionItem[] {
  return options.map(item => ({
    name: item,
    selected: selected.includes(item)
  }));
}

ComponentWithComputed({
  properties: {
    visible: {
      type: Boolean,
      value: false
    },
    title: {
      type: String,
      value: '设置你的偏好'
    },
    subtitle: {
      type: String,
      value: '这样我能为你推荐更合适的菜品'
    },
    showRegion: {
      type: Boolean,
      value: true
    },
    showCuisine: {
      type: Boolean,
      value: true
    },
    showTaste: {
      type: Boolean,
      value: true
    },
    regionLabel: {
      type: String,
      value: '你在哪个省份？'
    },
    regionPlaceholder: {
      type: String,
      value: '请选择省份'
    },
    cuisineLabel: {
      type: String,
      value: '喜欢什么菜系？'
    },
    tasteLabel: {
      type: String,
      value: '偏好什么口味？'
    },
    confirmText: {
      type: String,
      value: '保存偏好'
    },
    initialRegion: {
      type: String,
      value: ''
    },
    initialCuisines: {
      type: Array,
      value: [] as string[]
    },
    initialTastes: {
      type: Array,
      value: [] as string[]
    }
  },

  data: {
    selectedRegion: '',
    selectedCuisines: [] as string[],
    selectedTastes: [] as string[],
    regions: regions
  } as ComponentData,

  computed: {
    cuisineOptions(data: ComponentData) {
      return generateOptions(cuisines, data.selectedCuisines)
    },
    tasteOptions(data: ComponentData) {
      return generateOptions(tastes, data.selectedTastes)
    }
  },

  watch: {
    'visible': function(visible: boolean) {
      if (visible) {
        this.setData({
          selectedRegion: this.data.initialRegion,
          selectedCuisines: this.data.initialCuisines || [],
          selectedTastes: this.data.initialTastes || []
        })
      }
    }
  },

  methods: {
    onClose() {
      this.triggerEvent('close');
    },

    onRegionChange(e: { detail: { value: number } }) {
      const region = regions[e.detail.value];
      this.setData({ selectedRegion: region });
    },

    onCuisineTap(e: { currentTarget: { dataset: { cuisine: string } } }) {
      const cuisine = e.currentTarget.dataset.cuisine;
      const { selectedCuisines } = this.data;
      const index = selectedCuisines.indexOf(cuisine);

      if (index >= 0) {
        selectedCuisines.splice(index, 1);
      } else {
        selectedCuisines.push(cuisine);
      }

      this.setData({ selectedCuisines: [...selectedCuisines] });
    },

    onTasteTap(e: { currentTarget: { dataset: { taste: string } } }) {
      const taste = e.currentTarget.dataset.taste;
      const { selectedTastes } = this.data;
      const index = selectedTastes.indexOf(taste);

      if (index >= 0) {
        selectedTastes.splice(index, 1);
      } else {
        selectedTastes.push(taste);
      }

      this.setData({ selectedTastes: [...selectedTastes] });
    },

    onSave() {
      const { selectedRegion, selectedCuisines, selectedTastes } = this.data;

      this.triggerEvent('save', {
        region: selectedRegion,
        cuisines: selectedCuisines,
        tastes: selectedTastes
      });
    }
  }
});