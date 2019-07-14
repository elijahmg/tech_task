Created by I.F

### Live demo

https://elijahmg.github.io/tech_task/

## Crate form from JSON configuration

In this project you can create form with JSON object configuration

## Properties

### headerLabel (String)

Used for name of the form

### items (Array)

Content object with following parameters

 - type
 - label (Used for field)
 
### type

Type can be one of the following values

- numberfield
- textfield
- textarea
- datefield
- checkbox
- radioButtons

### buttons (Array)

This property is using for configure form submit buttons

### Valid JSON configuration (Example)

~~~
{
  headerLabel: 'First form',
  items: [
    {
      type: 'numberfield',
      label: 'Count'
    },
    {
      type: 'textfield',
      label: 'Caption'
    },
    {
      type: 'textarea',
      label: 'Description'
    },
    {
      type: 'datefield',
      label: 'Date'
    },
    {
      type: 'checkbox',
      label: 'Is Editable'
    },
    {
      type: 'radioButtons',
      label: 'Yes'
    },
    {
      type: 'radioButtons',
      label: 'No'
    }
  ],
  buttons: ['Save', 'Cancel']
}
~~~

### Caution

All properties are case sensitive! 
