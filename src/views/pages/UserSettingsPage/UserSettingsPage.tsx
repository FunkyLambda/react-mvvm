import {IUserSettingsViewModel} from '../../../viewmodels/UserSettings/types'

export const UserSettingsPage = (
  vm: IUserSettingsViewModel,
) => {
  return (
    <div>
      <div>
        <label>Name</label>
        <input
          value={vm.Name}
          type="text"
          onChange={(e) => vm.OnUpdateName(e.target.value)}
        />
      </div>
      <br/>
      <div>
        <label>Age</label>
        <input
          value={vm.Age}
          type="text"
          onChange={(e) => vm.OnUpdateAge(e.target.value)}
        />
      </div>
      {vm.MaySubscribe() && 
        <div>
          <br/>
          <input 
            type="checkbox" 
            checked={vm.IsSubscribed}
            onChange={(e) => vm.OnUpdateSubscription(e.target.checked)}
          />
          <label>
            Sign me up for the newsletter
          </label>
        </div>
      }
      <br/><br/>
      <button onClick={vm.SaveUpdates}>Update</button>
    </div>
  )
}
