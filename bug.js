In React Native, when working with FlatList or SectionList, a common performance issue arises from improper key extraction. If you don't provide a unique `key` prop for each item, React Native might struggle to efficiently update the list. This can lead to slow rendering, especially with large datasets, and even crashes in extreme cases.  For example:

```javascript
<FlatList
  data={myData}
  renderItem={({item}) => <MyComponent item={item} />}
/>
```

This is incorrect as it doesn't provide unique keys. The correct approach is:

```javascript
<FlatList
  data={myData}
  renderItem={({item}) => <MyComponent item={item} key={item.id} />}
  keyExtractor={(item) => item.id}
/>
```

Using `keyExtractor` is generally preferred for performance.