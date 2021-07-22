module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            require.resolve('babel-plugin-module-resolver'),
            {
                cwd: 'babelrc',
                extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
                alias: {
                    config: ['./src/config'],
                    components: ['./src/components'],
                    library: ['./src/library'],
                    navigation: ['./src/navigation'],
                    res: ['./src/res'],
                    screens: ['./src/screens'],
                },
            },
        ],
        'jest-hoist',
    ],
}
