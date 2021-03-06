export class HeaderCellController{

  /**
   * Calculates the styles for the header cell directive
   * @param  {scope}
   * @return {styles}
   */
  styles(scope){
    return {
      width: scope.column.width  + 'px',
      minWidth: scope.column.minWidth  + 'px',
      maxWidth: scope.column.maxWidth  + 'px',
      height: scope.column.height  + 'px'
    };
  }

  /**
   * Calculates the css classes for the header cell directive
   * @param  {scope}
   */
  cellClass(scope){
    var cls = {
      'sortable': scope.column.sortable,
      'dt-header-cell': true,
      'resizable': scope.column.resizable
    };

    if(scope.column.heaerClassName){
      cls[scope.column.headerClassName] = true;
    }

    return cls;
  }

  /**
   * Toggles the sorting on the column
   * @param  {scope}
   */
  sort(scope){
    if(scope.column.sortable){
      if(!scope.column.sort){
        scope.column.sort = 'asc';
      } else if(scope.column.sort === 'asc'){
        scope.column.sort = 'desc';
      } else if(scope.column.sort === 'desc'){
        scope.column.sort = undefined;
      }

      scope.onSort({
        column: scope.column
      });
    }
  }

  /**
   * Toggles the css class for the sort button
   * @param  {scope}
   */
  sortClass(scope){
    return {
      'sort-btn': true,
      'sort-asc icon-down': scope.column.sort === 'asc',
      'sort-desc icon-up': scope.column.sort === 'desc'
    };
  }

  /**
   * Updates the column width on resize
   * @param  {width}
   * @param  {column}
   */
  onResize(scope, width, column){
    scope.onResize({
      column: column,
      width: width
    });
    //column.width = width;
  }

  /**
   * Invoked when the header cell directive checkbox was changed
   * @param  {object} scope angularjs scope
   */
  onCheckboxChange(scope){
    scope.onCheckboxChange();
  }

}
