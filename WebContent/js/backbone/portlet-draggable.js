var PortletDraggable = function () {

    return {
        //main function to initiate the module
        init: function () {

            if (!jQuery().sortable) {
                return;
            }

            $("#sortable_portlets").sortable({
                //connectWith: ".column",
                items: ".sortable",
                handle: ".portlet-title",
                opacity: 0.8,
                coneHelperSize: true,
                //placeholder: 'portlet-sortable-placeholder',//��������˴���ʽ������������ȥ����
                forcePlaceholderSize: true,
                tolerance: "pointer",
                helper: "clone",
                cancel: ".portlet-sortable-empty",
                revert: 250, // animation in milliseconds
                update: function (b, c) {
                    if (c.item.prev().hasClass("portlet-sortable-empty")) {
                        c.item.prev().before(c.item);
                    }
                }
            });
        }
    };
}();