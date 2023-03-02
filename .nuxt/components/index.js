export { default as CalendarBanner } from '../../components/CalendarBanner.vue'
export { default as CertificatesList } from '../../components/CertificatesList.vue'
export { default as CertificatesListItem } from '../../components/CertificatesListItem.vue'
export { default as EventsList } from '../../components/EventsList.vue'
export { default as EventsListItem } from '../../components/EventsListItem.vue'
export { default as TheBackTop } from '../../components/TheBackTop.vue'
export { default as TheFooter } from '../../components/TheFooter.vue'
export { default as TheHeader } from '../../components/TheHeader.vue'
export { default as TheSidebar } from '../../components/TheSidebar.vue'
export { default as UserAvatar } from '../../components/UserAvatar.vue'
export { default as UserAvatarWithEdit } from '../../components/UserAvatarWithEdit.vue'
export { default as UserInfoSection } from '../../components/UserInfoSection.vue'
export { default as UserServicesList } from '../../components/UserServicesList.vue'
export { default as UserServicesListItem } from '../../components/UserServicesListItem.vue'
export { default as ModalsModalWithoutHeader } from '../../components/modals/ModalWithoutHeader.vue'
export { default as UiButtonLoadMore } from '../../components/ui/ButtonLoadMore.vue'
export { default as UiPreLoader } from '../../components/ui/PreLoader.vue'
export { default as FormsInputsSearchInput } from '../../components/forms/inputs/SearchInput.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
