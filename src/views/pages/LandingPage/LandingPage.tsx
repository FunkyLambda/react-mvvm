import {ILandingViewModel} from '../../../viewmodels/Landing/types'

export const LandingPage = (
  vm: ILandingViewModel,
) => {
  return (
    <div>
      <label>Welcome {vm.Name}</label>
      <button
        onClick={() => 
          vm.OnSettingsPressed()
        }
      >
        Settings
      </button>
    </div>
  )
}
