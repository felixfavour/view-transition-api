- The View Transition API applies transitions for DOM updates in a Single Page Application and in Multi-Page applications too.
- For SPAs and MPAs however, they work a bit differently in the way they are executed even if the outcome is similar.

## For SPAs

- This is begun by calling the document.startViewTransition() function that takes in a function as a parameter, the callback function passed in as a parameter is typically what changes the DOM (view) when invoked.
- The function above returns a promise which when fulfilled is a ViewTransition object.
- When the function is invoked, the ViewTransition API captures a snapshot of elements that have the view-transition-name CSS property declared (on the current page).
- After the function is invoked, the ViewTransition.updateCallbackDone promise is fulfilled signifying that actions to be taken after DOM update can now be done.
- Then the API captures snapshots from the new view, just before the view transition is about to begin, and after the ViewTransition.ready promise is fulfilled. Here you can decide to replace the default animation with a custom one.
- For the transition view, the old page animates "out" while the new page animates "in". By default a crossfade animation is applied.
- When the transition view is completed, the ViewTransition.finished promise is then fulfilled.
-

## For MPAs

-
